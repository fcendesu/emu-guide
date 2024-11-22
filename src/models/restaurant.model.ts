import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedLocation } from './types/base.types';

export interface IRestaurant extends IBaseDocument, ITranslatedName, ITranslatedLocation {
  googleMapsUrl: string;
  openTime: string;
  closeTime: string;
  studyScore: number;
  priceRange: string;
  comments: string[];
  trComments: string[];
}

const RestaurantSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  location: { type: String, required: true },
  trLocation: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
  openTime: { type: String, required: true },
  closeTime: { type: String, required: true },
  studyScore: { type: Number, required: true, min: 0, max: 10 },
  priceRange: { type: String, required: true },
  comments: [{ type: String }],
  trComments: [{ type: String }],
}, { timestamps: true });

export default mongoose.model<IRestaurant>('Restaurant', RestaurantSchema); 