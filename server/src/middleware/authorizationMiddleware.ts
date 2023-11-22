import { NextFunction, Request, Response } from "express";
import db from "../database/models";
import "./customTypes";

const {User} = db;

async function isAdmin(req: Request, res: Response, next: NextFunction) {
  console.log("req.userid in isAdmin", req.userId);
  const user = await User.findByPk(req?.userId);
  if (user.role === 'admin') {
    next();
    return;
  }
  res.status(403).send({
    message: "Requires admin role",
  });
}

async function isManager(req: Request, res: Response, next: NextFunction) {
  const user = User.findByPk(req.userId);
  if (user.role ==='manager') {
    next();
    return;
  }
  res.status(403).send({
    message: "Requires Manager role",
  });
}
async function isAdminOrManager(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = User.findByPk(req.userId);
  if (user.role == 'admin') {
    next();
    return;
  }
  if (user.role_id == 'manager') {
        next();
        return;
  }
  res.status(403).send({
    message: "Requires Manager role or Admin Role",
  });
  
}
export default { isAdmin, isManager, isAdminOrManager};
