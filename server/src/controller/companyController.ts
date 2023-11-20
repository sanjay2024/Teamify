import { Request, Response } from "express";
import db from '../database/models'
import { Op } from "sequelize";
const Company =  db.Company;

const getAllCompanies = async (req:Request,res:Response)=>{
      try {
          const companyList = await Company.findAll({
              where:{
                  isActive:true
              }
          });
          if(companyList){
                res.status(200).json({response:companyList});
          }
          else {
                res.status(404).json({message:"No Records Found"});
          }
      } 
      catch (error) {
          res.status(500).json({error:error});
      }
}

const getCompanyById =async (req:Request,res:Response) => {
       try {
            const {id} = req.params;
            console.log("before");
            
            const companyData = await Company.findAll({
              where: {
                [Op.and]:{
                  id: id,
                  isActive: true,
                }
              },
            });
            console.log("after");
            if(companyData){
                  res.status(200).json({response:companyData});
            }
            else{
                  res.status(404).json({message:"Record Not Found"});
            } 
       } 
       catch (error) {
            res.status(500).json({error:error});
       }
}
const addCompany =async (req:Request,res:Response) => {
        try {
            const {company_name,company_address,email,no_of_employee}=req.body;
            const companyCreated = await Company.create({
              company_name: company_name,
              company_address: company_address,
              email: email,
              no_of_employee: no_of_employee,
            });
            if(companyCreated){
                  res.status(200).json({created:companyCreated})
            }
            else{
                  res.status(400).json({message:"Coundn't created"});
            }
        } 
        catch (error) {
                res.status(500).json({error:error});
        }
}

const deleteCompany  = async (req:Request,res:Response)=>{
      try {
            const {id} = req.params;

            let deletedCompany =await Company.update({
                  isActive:false
            }, 
            {
               where: {
                 id: id,
               },
             });

            if (deletedCompany) {
              res.status(200).json({ response: deletedCompany });
            } else {
              res.status(404).json({ message: "Record Not Found" });
            }
      } 
      catch (error) {
            res.status(500).json({error:error});
      }
}

const updateCompany = async (req:Request,res:Response)=>{
      try {
            const {id} = req.params;
            const {company_name,company_address,no_of_employee} = req.body;
            const updatedCompany = await Company.update({
              company_name: company_name,
              company_address: company_address,
              no_of_employee: no_of_employee,
            },{
                  where:{
                        id:id
                  }
            });
            if(updatedCompany){
                  res.status(200).json({response:updatedCompany});
            }
            else{
                  res.status(404).json({message:"Record Not Found"});
            }
      } 
      catch (error) {
            res.status(500).json({error:error})
      }
}
export default{getAllCompanies,addCompany,deleteCompany,updateCompany,getCompanyById}