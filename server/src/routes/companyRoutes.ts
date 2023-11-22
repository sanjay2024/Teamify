import express from "express";

import companyController from './../controller/companyController';
import authenticationMiddleware from "../middleware/authenticationMiddleware";
import authorizationMiddleware from "../middleware/authorizationMiddleware";

const routes = express.Router();

const {getAllCompanies,addCompany,updateCompany,deleteCompany,getCompanyById} = companyController;
const { verifyToken } = authenticationMiddleware;

const { isAdmin } = authorizationMiddleware;
const companyRoutes = ()=>{
        routes
          .get("/", [verifyToken, isAdmin], getAllCompanies)
          .get("/:id", [verifyToken, isAdmin], getCompanyById)
          .post("/", [verifyToken, isAdmin], addCompany)
          .put("/:id", [verifyToken, isAdmin], updateCompany)
          .delete("/:id", [verifyToken, isAdmin], deleteCompany);
        return routes;
}

export default companyRoutes;