import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedPlace } from './types/base.types';

export interface IStationery extends IBaseDocument, ITranslatedName, ITranslatedPlace {
  priceScale: string;
  googleMapsUrl: string;
  services: string[];
  trServices: string[];
}

const StationerySchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  priceScale: { type: String, required: true },
  place: { type: String, required: true },
  trPlace: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
  services: [{ type: String }],
  trServices: [{ type: String }],
}, { timestamps: true });

export default mongoose.model<IStationery>('Stationery', StationerySchema); 