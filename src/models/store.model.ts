import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedPlace } from './types/base.types';

export interface IStore extends IBaseDocument, ITranslatedName, ITranslatedPlace {
  type: string;
  googleMapsUrl: string;
}

const StoreSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  type: { type: String, required: true },
  place: { type: String, required: true },
  trPlace: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IStore>('Store', StoreSchema); 