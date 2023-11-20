import express,{Express} from 'express';
import { Routes } from './routes';
import cors from 'cors';

export const expressApp = (app: Express)=>{
        app.use(cors());
        app.use(express.json());
        Routes(app);
}