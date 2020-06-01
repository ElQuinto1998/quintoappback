"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resumes_controller_1 = require("../../controllers/resumes/resumes.controller");
const router = express_1.Router();
router.get('/resumes', resumes_controller_1.getResumes);
router.post('/resumes', resumes_controller_1.saveResumes);
exports.default = router;
