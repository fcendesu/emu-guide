import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedLocation } from './types/base.types';

export interface IFitnessCenter extends IBaseDocument, ITranslatedName, ITranslatedLocation {
  googleMapsUrl: string;
  contactLink: string;
  priceScale: string;
}

const FitnessCenterSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  location: { type: String, required: true },
  trLocation: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
  contactLink: { type: String, required: true },
  priceScale: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IFitnessCenter>('FitnessCenter', FitnessCenterSchema); 