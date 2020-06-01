import {model, Schema, Document} from 'mongoose'

export interface IExperiencia extends Document {
    cargo: string,
    empresa: string,
    descripcion: string,
    anios: [typeof Number]
}

const experienciaSchema = new Schema({
    cargo: {type: String, required: true},
    empresa: {type: String, required: true},
    descripcion: {type: String, required: true},
    anios: {type: [typeof Number], required: true}
});

export default model<IExperiencia>('Experiencia', experienciaSchema);
