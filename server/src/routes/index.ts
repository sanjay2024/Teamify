import { Express } from "express";
import companyRoutes from './companyRoutes'
import userRoutes from "./userRoutes";
import projectRoutes from "./projectRoutes";
import userProjectRoutes from "./userProjectRoutes";
import authRoutes from "./authRoutes";
export const Routes = (app:Express)=>{
        app.use('/',authRoutes(app))
        app.use('/company',companyRoutes())
        app.use('/user',userRoutes());
        app.use('/project',projectRoutes());
        app.use('/userProject',userProjectRoutes());
}