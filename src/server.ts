import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mainRoutes from './routes/index';
import {mongoConnect} from './database/mongo';
dotenv.config();
mongoConnect();
const server = express();


server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT);