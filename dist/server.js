"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const experiencia_routes_1 = __importDefault(require("./routes/resumes/experiencia.routes"));
//Initializations
const server = express_1.default();
//Settings
server.set('port', process.env.PORT || 5000);
//Middlewares
server.use(morgan_1.default('dev'));
server.use(cors_1.default());
server.use(express_1.default.urlencoded({ extended: false }));
server.use(express_1.default.json());
//Routes
server.get('/', (req, res) => {
    res.send('Hola mundo');
});
server.use(experiencia_routes_1.default);
exports.default = server;
