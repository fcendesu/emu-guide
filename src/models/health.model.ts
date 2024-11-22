import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedLocation } from './types/base.types';

export interface IHealth extends IBaseDocument, ITranslatedName, ITranslatedLocation {
  type: string;
  googleMapsUrl: string;
}

const HealthSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  trLocation: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IHealth>('Health', HealthSchema); 