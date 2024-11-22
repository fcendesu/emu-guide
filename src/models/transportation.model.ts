import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName } from './types/base.types';

export interface ITransportation extends IBaseDocument, ITranslatedName {
  type: string;
  explanation: string;
  trExplanation: string;
  officialLink: string;
}

const TransportationSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  type: { type: String, required: true },
  explanation: { type: String, required: true },
  trExplanation: { type: String, required: true },
  officialLink: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<ITransportation>('Transportation', TransportationSchema); 