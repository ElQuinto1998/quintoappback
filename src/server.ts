import express from 'express';
import morgan from "morgan";
import cors from 'cors';

//Initializations
const server = express();

//Settings
server.set('port', process.env.PORT || 5000);

//Middlewares
server.use(morgan('dev'));
server.use(cors());
server.use(express.urlencoded({extended: false}));
server.use(express.json());

//Routes
server.get('/', (req, res) => {
    res.send('Hola mundo');
});

export default server;
