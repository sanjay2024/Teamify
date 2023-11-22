import express, { NextFunction, Request, Response } from "express";
import { SECRET_KEY } from "../config/config";
import db from "../database/models";
import jwt from "jsonwebtoken";
const { User } = db;

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token provided" });
    }
    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      res.status(403).send({ message: "No token found!" });
    }
    if (typeof token === "string") {
      const decoded: any = jwt.verify(token, SECRET_KEY);
      req.userId = decoded?.id;
      console.log("REq.userID", req.userId, "decoded", decoded);
      next();
    }
  } catch (error) {
    return res.status(401).send({
      message: "Unauthorized!",
    });
  }
};

const verifyId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let token = req.headers["x-access-token"];
    if (!token) {
      res.status(403).send({ message: "No token found" });
    }
    if (typeof token === "string") {
      const decoded: any = jwt.verify(token, SECRET_KEY);
      req.userId = decoded.id;
      if (req.userId != req.params.id) {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      }
    }
    next();
  } catch (error) {
    return res.status(401).send({
      message: "Unauthorized!",
    });
  }
};

export default { verifyId, verifyToken };
