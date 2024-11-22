import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedPlace } from './types/base.types';

export interface IDiscount extends IBaseDocument, ITranslatedName, ITranslatedPlace {
  googleMapsUrl: string;
  discountPrice: number;
  previousPrice: number;
}

const DiscountSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  place: { type: String, required: true },
  trPlace: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
  discountPrice: { type: Number, required: true },
  previousPrice: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model<IDiscount>('Discount', DiscountSchema); 