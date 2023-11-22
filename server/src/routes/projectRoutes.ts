import express from 'express'
import projectController from '../controller/projectController';
import authenticationMiddleware from '../middleware/authenticationMiddleware';
import authorizationMiddleware from '../middleware/authorizationMiddleware';

const routes = express.Router();
const { verifyToken } = authenticationMiddleware;

const {isAdminOrManager,isManager} = authorizationMiddleware;
const {
  getAllProject,
  getProjectId,
  deleteProject,
  updateProject,
  createProject,
} = projectController;

const projectRoutes = ()=>{
        routes
          .post("/", [verifyToken, isAdminOrManager], createProject)
          .get("/", [verifyToken, isAdminOrManager], getAllProject)
          .get("/:id", [verifyToken, isAdminOrManager], getProjectId)
          .put("/:id", [verifyToken, isManager], updateProject)
          .delete("/:id", [verifyToken, isAdminOrManager], deleteProject);
        return routes;
}

export default projectRoutes;
