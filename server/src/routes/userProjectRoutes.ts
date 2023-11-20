import express from 'express';

const routes = express.Router();

import userProjectController from '../controller/userProjectController';

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
        .get('/',getAllUserProject)
        .get('/:user_id',getUserProjectByUserId)
        .get('/:project_id',getUserProjectByProjectId)
        .post('/',createUserProject)
        .put('/:id',updateUserProject)
        .delete('/:id',deleteUserProject)
        return routes;
}

export default userProjectRoutes;