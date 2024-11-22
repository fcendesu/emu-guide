import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedPlace } from './types/base.types';

export interface IEntertainment extends IBaseDocument, ITranslatedName, ITranslatedPlace {
  googleMapsUrl: string;
  priceRange: string;
  comments: string[];
  trComments: string[];
}

const EntertainmentSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  place: { type: String, required: true },
  trPlace: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
  priceRange: { type: String, required: true },
  comments: [{ type: String }],
  trComments: [{ type: String }],
}, { timestamps: true });

export default mongoose.model<IEntertainment>('Entertainment', EntertainmentSchema); 