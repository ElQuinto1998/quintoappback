"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveResumes = exports.getResumes = void 0;
const experiencia_1 = __importDefault(require("../../models/resumes/experiencia"));
exports.getResumes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const experiencias = yield experiencia_1.default.find();
    res.json(experiencias);
});
exports.saveResumes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const experiencia = new experiencia_1.default(req.body);
    yield experiencia.save();
    return res.status(201).json(experiencia);
});
