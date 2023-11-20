import express from "express";

import userController from "../controller/userController";

const routes = express.Router();

const {getAllUser,getUserById,addUser,updateUser,deleteUser} = userController;

const userRoutes = ()=>{
        routes
        .get('/',getAllUser)
        .get('/:id',getUserById)
        .post('/',addUser)
        .put('/:id',updateUser)
        .delete('/:id',deleteUser)
        return routes;
}

export default userRoutes;