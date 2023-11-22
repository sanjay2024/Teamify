import express from "express";

import userController from "../controller/userController";

import authenticationMiddleware from "../middleware/authenticationMiddleware";

import authorizationMiddleware from "../middleware/authorizationMiddleware";

const routes = express.Router();

const {getAllUser,getUserById,addUser,updateUser,deleteUser} = userController;

const {verifyToken ,verifyId} = authenticationMiddleware;

const {isAdmin} = authorizationMiddleware

const userRoutes = ()=>{
        routes
          .get("/", [verifyToken, isAdmin], getAllUser)
          .get("/:id", [verifyId], getUserById)
          .post("/", [verifyToken, isAdmin],addUser)
          .put("/:id",[verifyId], updateUser)
          .delete("/:id", [verifyToken], deleteUser);
        return routes;
}

export default userRoutes;