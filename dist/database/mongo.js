"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("../config/config"));
const CONFIG_DB = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};
mongoose_1.default.connect(config_1.default.DB.URL, CONFIG_DB);
const conection = mongoose_1.default.connection;
conection.once('open', () => {
    console.log('Db is connected');
});
conection.on('error', (error) => {
    console.log(error);
    process.exit(0);
});
