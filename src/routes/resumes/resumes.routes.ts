import {Router} from 'express'

import {getResumes, getResumeById, saveResumes} from '../../controllers/resumes/resumes.controller'

const router = Router();

router.get('/resumes', getResumes);
router.get('/resumes/:id', getResumeById);
router.post('/resumes', saveResumes);

export default router
