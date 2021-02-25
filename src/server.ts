import 'reflect-metadata';
import express, { request, response } from 'express';
import './database';
import { router } from './routes';

const app = express();

app.listen(3333, ()=>console.log('Server is running'));

// hability express with json
app.use(express.json())

app.use(router);
