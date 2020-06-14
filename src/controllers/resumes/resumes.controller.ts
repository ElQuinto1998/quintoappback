import {Request, Response} from 'express'

import Resume, {IResume} from '../../models/resumes/resume'

export const getResumes = async (req: Request, res: Response) => {
    const resumes = await Resume.find();
    res.json({data: resumes})
};

export const getResumeById = async (req: Request, res: Response) => {
    const resume = await Resume.findById(req.params.id);
    res.status(200).json({data: resume})
};

export const saveResumes = async (req: Request, res: Response) => {
    const resume: IResume = new Resume(req.body);
    await resume.save();
    return res.status(201).json({data: resume});
};

