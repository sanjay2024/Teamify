import { Request, Response } from "express";
import bcrypt from "bcrypt";
import db from "../database/models";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/config";
const { User } = db;

const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: {
                email: email,
            },
        });

        if (user) {
            const isCorrect = await bcrypt.compare(password, user.password);

            if (isCorrect) {
                const token = await jwt.sign({ id: user.id }, SECRET_KEY, {
                    expiresIn: 2600,
                });
                res.setHeader("Authorization", `Bearer ${token}`);
                res.status(200).send({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    accessToken: token,
                });
            } else {
                res.status(401).json({ message: "incorrect password" });
            }
        } else {
            res.status(404).json({ messgae: "email not found" });
        }
    } catch (error) { }
};

const signUp = async (req: Request, res: Response) => {
    try {
        const { name, email, password, company_id, role, salary } = req.body;

        const checkDuplicate  = await User.findOne({
            where:{
                email:email
            }
        })

        if(checkDuplicate){
            res.status(400).json({message:'Mail id is Already Exsist'});
        }

        const userCreated = await User.create({
          name: name,
          email: email,
          password: bcrypt.hash(password,8),
          company_id: company_id,
          role: role,
          salary: salary,
        });

        res.status(200).json({
            userCreated:userCreated
        })
    } catch (error) {
        res.status(500).json({error:error})
    }
};

export default { signIn, signUp };
