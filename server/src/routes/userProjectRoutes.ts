import express from 'express';
import authenticationMiddleware from "../middleware/authenticationMiddleware";
import authorizationMiddleware from "../middleware/authorizationMiddleware";
import userProjectController from '../controller/userProjectController';



const { verifyToken } = authenticationMiddleware;
const { isAdminOrManager, isManager } = authorizationMiddleware;
const routes = express.Router();
const {
  getAllUserProject,
  getUserProjectByProjectId,
  getUserProjectByUserId,
  createUserProject,
  updateUserProject,
  deleteUserProject,
} = userProjectController;

const userProjectRoutes = ()=>{
        routes
          .get("/", [verifyToken,isAdminOrManager], getAllUserProject)
          .get("/user/:user_id", getUserProjectByUserId)
          .get("/project/:project_id", getUserProjectByProjectId)
          .post("/",[verifyToken,isAdminOrManager],createUserProject)
          .put("/:id",[verifyToken,isAdminOrManager], updateUserProject)
          .delete("/:id",[verifyToken,isAdminOrManager],deleteUserProject);
        return routes;
}

export default userProjectRoutes;