import mongoose, { Schema } from 'mongoose';
import { IBaseDocument, ITranslatedName } from './types/base.types';

export interface IPrivateClass extends IBaseDocument, ITranslatedName {
  price: number;
  contactLink: string;
}

const PrivateClassSchema = new Schema({
  name: { type: String, required: true },
  trName: { type: String, required: true },
  price: { type: Number, required: true },
  contactLink: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IPrivateClass>('PrivateClass', PrivateClassSchema); 