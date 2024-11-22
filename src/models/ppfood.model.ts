import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedPlace } from './types/base.types';

export interface IPPFood extends IBaseDocument, ITranslatedName, ITranslatedPlace {
  googleMapsUrl: string;
  price: number;
  comments: string[];
  trComments: string[];
}

const PPFoodSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  place: { type: String, required: true },
  trPlace: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
  price: { type: Number, required: true },
  comments: [{ type: String }],
  trComments: [{ type: String }],
}, { timestamps: true });

export default mongoose.model<IPPFood>('PPFood', PPFoodSchema); 