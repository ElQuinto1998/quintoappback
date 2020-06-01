import {Router} from 'express'

import {getResumes, saveResumes} from '../../controllers/resumes/resumes.controller'

const router = Router();

router.get('/resumes', getResumes);
router.post('/resumes', saveResumes);

export default router
