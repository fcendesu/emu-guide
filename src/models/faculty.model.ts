import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName } from './types/base.types';

export interface IFaculty extends IBaseDocument, ITranslatedName {
  description: string;
  trDescription: string;
  officialPageUrl: string;
}

const FacultySchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  description: { type: String, required: true },
  trDescription: { type: String, required: true },
  officialPageUrl: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IFaculty>('Faculty', FacultySchema); 