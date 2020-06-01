"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const experienciaSchema = new mongoose_1.Schema({
    cargo: { type: String, required: true },
    empresa: { type: String, required: true },
    descripcion: { type: String, required: true },
    anios: { type: [typeof Number], required: true }
});
exports.default = mongoose_1.model('Experiencia', experienciaSchema);
