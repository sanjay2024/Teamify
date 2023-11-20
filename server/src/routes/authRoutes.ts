import express, { Express,Request, Response } from "express";
import authController from "../controller/authController";

const routes = express.Router();

const {signIn,signUp} = authController;

const authRoutes = (app:any)=>{
         app.use(function (req: Request, res: Response, next: any) {
           res.header(
             "Access-Control-Allow-Headers",
             "x-access-token, Origin, Content-Type, Accept"
           );
           next();
         });
        routes
        .post('/signIn',signIn)
        .post('/signup',signUp);
        return routes;
}

export default authRoutes;