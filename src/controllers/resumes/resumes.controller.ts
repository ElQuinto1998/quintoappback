import {Request, Response} from 'express'

import Experiencia, {IExperiencia} from '../../models/resumes/experiencia'

export const getResumes = async (req: Request, res: Response) => {
    const experiencias = await Experiencia.find();
    res.json(experiencias)
};

export const saveResumes = async (req: Request, res: Response) => {
    const experiencia: IExperiencia = new Experiencia(req.body);
    await experiencia.save();
    return res.status(201).json(experiencia);
};

