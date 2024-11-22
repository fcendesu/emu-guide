import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName } from './types/base.types';

export interface IGuide extends IBaseDocument, ITranslatedName {
  text: string;
  trText: string;
  followUpLink: string;
}

const GuideSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  text: { type: String, required: true },
  trText: { type: String, required: true },
  followUpLink: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IGuide>('Guide', GuideSchema); 