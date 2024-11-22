import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName } from './types/base.types';

export interface ICommunity extends IBaseDocument, ITranslatedName {
  platform: string;
  explanation: string;
  trExplanation: string;
  link: string;
}

const CommunitySchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  platform: { type: String, required: true },
  explanation: { type: String, required: true },
  trExplanation: { type: String, required: true },
  link: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<ICommunity>('Community', CommunitySchema); 