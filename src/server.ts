import express from 'express';
import morgan from "morgan";
import cors from 'cors';

import resumeRoutes from './routes/resumes/resumes.routes'

//Initializations
const server = express();

//Settings
server.set('port', process.env.PORT || 5000);

//Middleware
server.use(morgan('dev'));
server.use(cors());
server.use(express.urlencoded({extended: false}));
server.use(express.json());

//Routes
server.get('/', (req, res) => {
    res.status(404).send({message: 'Not found'})
});

server.use('/api', resumeRoutes);

export default server;
