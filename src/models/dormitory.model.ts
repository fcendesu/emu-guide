import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedPlace } from './types/base.types';

export interface IDormitory extends IBaseDocument, ITranslatedName, ITranslatedPlace {
  googleMapsUrl: string;
  priceRange: string;
  officialPageUrl: string;
  facilities: string[];
  trFacilities: string[];
  comments: string[];
  trComments: string[];
}

const DormitorySchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  place: { type: String, required: true },
  trPlace: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
  priceRange: { type: String, required: true },
  officialPageUrl: { type: String, required: true },
  facilities: [{ type: String }],
  trFacilities: [{ type: String }],
  comments: [{ type: String }],
  trComments: [{ type: String }],
}, { timestamps: true });

export default mongoose.model<IDormitory>('Dormitory', DormitorySchema); 