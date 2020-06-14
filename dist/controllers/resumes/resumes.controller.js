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
exports.saveResumes = exports.getResumeById = exports.getResumes = void 0;
const resume_1 = __importDefault(require("../../models/resumes/resume"));
exports.getResumes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resumes = yield resume_1.default.find();
    res.json({ data: resumes });
});
exports.getResumeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resume = yield resume_1.default.findById(req.params.id);
    res.status(200).json({ data: resume });
});
exports.saveResumes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const resume = new resume_1.default(req.body);
    yield resume.save();
    return res.status(201).json({ data: resume });
});
