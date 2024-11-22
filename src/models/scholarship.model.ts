import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName } from './types/base.types';

export interface IScholarship extends IBaseDocument, ITranslatedName {
  explanation: string;
  trExplanation: string;
  officialLink: string;
}

const ScholarshipSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  explanation: { type: String, required: true },
  trExplanation: { type: String, required: true },
  officialLink: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IScholarship>('Scholarship', ScholarshipSchema); 