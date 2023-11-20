import express from 'express'
import projectController from '../controller/projectController';

const routes = express.Router();

const {
  getAllProject,
  getProjectId,
  deleteProject,
  updateProject,
  createProject,
} = projectController;

const projectRoutes = ()=>{
        routes
        .post('/',createProject)
        .get('/',getAllProject)
        .get('/:id',getProjectId)
        .put('/:id',updateProject)
        .delete('/:id',deleteProject)
        ;
        return routes;
}

export default projectRoutes;
