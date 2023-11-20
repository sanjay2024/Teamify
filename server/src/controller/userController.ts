import { Request, Response } from "express";
import db from "../database/models";
import bcrypt from "bcrypt";
import { Op } from "sequelize";
const { User } = db;

const getAllUser = async (req: Request, res: Response) => {
        try {
                const userData = await User.findAll({
                        where: {
                                isActive: true,
                        },
                });
                if (userData) {
                        res.status(200).json({ response: userData });
                } else {
                        res.status(404).json({ message: "Record Not Found" });
                }
        } catch (error) {
                res.status(500).json({ error: error });
        }
};
const getUserById = async (req: Request, res: Response) => {
        try {
                const { id } = req.params;
                const getUser = await User.findAll({
                        where: {
                                [Op.and]: {
                                        id: id,
                                        IsActive: true,
                                },
                        },
                });
                if (getUser) {
                        res.status(200).json({ response: getUser });
                } else {
                        res.status(404).json({ message: "record not Found" });
                }
        } catch (error) {
                res.status(500).json({ error: error });
        }
};
const addUser = async (req: Request, res: Response) => {
        try {
                const { name, email, password, company_id, role, salary } = req.body;
                const hashedPassword = await bcrypt.hash(password, 10);
                const userCreated = await User.create({
                        name: name,
                        email: email,
                        password: hashedPassword,
                        company_id: company_id,
                        role: role,
                        salary: salary,
                });
                if (userCreated) {
                        res.status(200).json({ response: userCreated });
                } else {
                        res.status(400).json({ message: "Record Not Found" });
                }
        } catch (error) {
                res.status(500).json({ error: error });
        }
};
const updateUser = async (req: Request, res: Response) => {
        try {
                const { id } = req.params;
                const { name, email, password, company_id, role, salary } = req.body;
                const updatedUser = await User.update(
                        {
                                name: name,
                                email: email,
                                password: password,
                                company_id: company_id,
                                role: role,
                                salary: salary,
                        },
                        {
                                where: {
                                        id: id,
                                },
                        }
                );

                if (updatedUser) {
                        res.status(200).json({ response: updatedUser });
                } else {
                        res.status(404).json({ message: "Record Not Found" });
                }
        } catch (error) {
                res.status(500).json({ error: error });
        }
};

const deleteUser = async (req: Request, res: Response) => {
        try {
                const { id } = req.params;
                const deletedUser = await User.update(
                        { isActive: false },
                        {
                                where: {
                                        id: id,
                                },
                        }
                );

                if (deletedUser) {
                        res.status(200).json({ response: deletedUser });
                } else {
                        res.status(404).json({ message: "Record Not Found" });
                }
        } catch (error) {
                res.status(500).json({ error: error });
        }
};
export default {
        getAllUser,
        getUserById,
        addUser,
        updateUser,
        deleteUser
};
