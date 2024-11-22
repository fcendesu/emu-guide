import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName } from './types/base.types';

export interface IClub extends IBaseDocument, ITranslatedName {
  memberSize: number;
  link: string;
  activities: string[];
  trActivities: string[];
}

const ClubSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  memberSize: { type: Number, required: true },
  link: { type: String, required: true },
  activities: [{ type: String }],
  trActivities: [{ type: String }],
}, { timestamps: true });

export default mongoose.model<IClub>('Club', ClubSchema); 