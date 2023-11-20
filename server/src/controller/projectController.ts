import { Request, Response } from "express";

import db from "../database/models";

const { Project } = db;

const createProject = async (req: Request, res: Response) => {
        try {
                const { project_name, company_id,status} = req.body;
                const addProject = await Project.create({
                        project_name: project_name,
                        company_id: company_id,
                        status: status,
                });

                if (addProject) {
                  res.status(200).json({ responses: addProject });
                } else {
                  res.status(400).json({ message: "Coundn't created" });
                }

        } catch (error) { 
                 res.status(500).json({ error: error });
        }
};
const getAllProject = async (req: Request, res: Response) => {
        try {
                const getProject = await Project.findAll();

                if (getProject) {
                        res.status(200).json({ responses: getProject });
                } else {
                        res.status(404).json({ message: "Record Not Found" });
                }
        } catch (error) {
                res.status(500).json({ error: error });
        }
};

const getProjectId = async (req: Request, res: Response) => {
        try {
                const { id } = req.params;

                const getProject = await Project.findByPk(id);

                if (getProject) {
                        res.status(200).json({ responses: getProject });
                } else {
                        res.status(404).json({ message: "Record Not Found" });
                }
        } catch (error) {
                res.status(500).json({ error: error });
        }
};

const updateProject = async (req: Request, res: Response) => {
        try {
                const { id } = req.params;
                const { project_name, company_id, status } = req.body;

                const updatedProject = await Project.update(
                        {
                                project_name: project_name,
                                company_id: company_id,
                                status: status,
                        },
                        {
                                where: {
                                        id: id,
                                },
                        }
                );

                if (updatedProject) {
                        res.status(200).json({ responses: updatedProject });
                } else {
                        res.status(404).json({ message: "Record Not Found" });
                }
        } catch (error) {
                res.status(500).json({ error: error });
        }
};

const deleteProject = async (req: Request, res: Response) => {
        try {
                const { id } = req.params;

                const deletedProject = await Project.destroy({
                        where: {
                                id: id,
                        },
                });

                if (deletedProject) {
                        res.status(200).json({ responses: deletedProject });
                } else {
                        res.status(404).json({ message: "Record Not Found" });
                }
        } catch (error) {
                res.status(500).json({ error: error });
        }
};
export default { getAllProject, getProjectId, updateProject, deleteProject ,createProject};
