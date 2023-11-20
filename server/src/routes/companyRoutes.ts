import express from "express";

import companyController from './../controller/companyController';

const routes = express.Router();

const {getAllCompanies,addCompany,updateCompany,deleteCompany,getCompanyById} = companyController;

const companyRoutes = ()=>{
        routes.get('/',getAllCompanies)
        .get('/:id',getCompanyById)
        .post('/',addCompany)
        .put('/:id',updateCompany)
        .delete('/:id',deleteCompany);
        return routes;
}

export default companyRoutes;