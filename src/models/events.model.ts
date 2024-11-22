import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName, ITranslatedPlace } from './types/base.types';

export interface IEvents extends IBaseDocument, ITranslatedName, ITranslatedPlace {
  date: Date;
  googleMapsUrl: string;
  cost: string;
  trCost: string;
}

const EventsSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  date: { type: Date, required: true },
  place: { type: String, required: true },
  trPlace: { type: String, required: true },
  googleMapsUrl: { type: String, required: true },
  cost: { type: String, required: true },
  trCost: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IEvents>('Events', EventsSchema); 