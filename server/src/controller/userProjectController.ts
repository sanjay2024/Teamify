import { Request, Response } from "express";

import db from "../database/models";

const {user_project,Project,User} = db;

const createUserProject =async (req:Request,res:Response) => {
        try {
                const {project_id,user_id} =  req.body;

                const getProjet = await Project.findByPk(project_id,{
                        where:{
                                status:"undone"
                        }
                })

                if(getProjet){
                        const addUserProject = await user_project.create({
                                project_id:project_id,
                                user_id:user_id
                        })
                        if(addUserProject){
                                res.status(200).json({response:addUserProject});
                        }
                        else{
                                res.status(404).json({message:"please fill all the details"});
                        }
                }
                else{
                        res.status(404).json({message:"The Project is Already done there is no need assigning employeee"});
                }
        } catch (error) {
                res.status(500).json({error:error});
        }  
}

const getAllUserProject =async (req:Request,res:Response) => {
        
        try {
              const getUserProject = await Project.findAll();

               if (getUserProject) {
                 res.status(200).json({ response: getUserProject });
               } else {
                 res
                   .status(404)
                   .json({ message: "No Record Found" });
               }

        } catch (error) {
                res.status(500).json({error:error});
        }
}

const getUserProjectByProjectId =async (req:Request,res:Response) => {
        try {
                const {id} = req.params;
                const getUserProject = await user_project.findOne({
                        where:{
                                project_id:id
                        }
                })

                 if (getUserProject) {
                   res.status(200).json({ response: getUserProject });
                 } else {
                   res.status(404).json({ message: "No Record Found" });
                 }
                
        } catch (error) {
                res.status(500).json({ error: error });
        }
}

const getUserProjectByUserId = async(req:Request,res:Response)=>{
        try {
               const {user_id} = req.params;

               const getUser = await User.findByPk(user_id,{
                   where:{
                        isActive:true
                   }
               })

               if(getUser){
                     const getUserProject = await user_project.findAll({
                          where:{
                                user_id:user_id
                          }
                     })

                     if(getUserProject){
                         res.status(200).json({response:getUserProject})
                     }
                     else{
                        res.status(404).json({message:"Record Not Found"});
                     }
               }
               else
               {
                   res.status(500).json({
                         message:`User id ${user_id} is not Exsist`
                   })
               }
        } catch (error) {
                res.status(500).json({error:error});
        }
}

const updateUserProject =async (req:Request,res:Response) => {
        try {
                const {id} = req.params;

                const {project_id,user_id} = req.body;

                const updatedUserProject = user_project.update({
                        project_id:project_id,
                        user_id:user_id
                },{
                        where:{
                                id:id
                        }
                })

                if (updatedUserProject) {
                  res.status(200).json({ response: updatedUserProject });
                } else {
                  res.status(404).json({ message: "Record Not Found" });
                }
        } catch (error) {
                res.status(500).json({ error: error });
        }
}

const deleteUserProject = async(req:Request,res:Response)=>{
        try {
                const {id} = req.params;

                const deletedUserProject = await user_project.destroy({
                        where:{
                                id:id
                        }
                })
                
                if(deletedUserProject){
                        res.status(200).json({
                                responses:deletedUserProject
                        })
                }
                else{
                        res.status(404).json({
                                message:`user_project ${id} is not found`
                        })
                }
                
        } catch (error) {
                
                res.status(500).json({
                        error:error
                })
        }
}

export default {
  createUserProject,
  getAllUserProject,
  getUserProjectByProjectId,
  getUserProjectByUserId,
  updateUserProject,
  deleteUserProject
};