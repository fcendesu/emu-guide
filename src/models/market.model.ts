import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedPlace } from './types/base.types';

export interface IMarket extends IBaseDocument, ITranslatedName, ITranslatedPlace {
  googleMapsUrl: string;
  priceScale: string;
}

const MarketSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  place: { type: String, required: true },
  trPlace: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
  priceScale: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IMarket>('Market', MarketSchema); 