import mongoose, { Schema } from 'mongoose';
import { IBaseDocument } from './types/base.types';

export interface INews extends IBaseDocument {
  title: string;
  trTitle: string;
  content: string;
  trContent: string;
  date: Date;
  followUpLink?: string;
}

const NewsSchema = new Schema({
  title: { type: String, required: true },
  trTitle: { type: String, required: true },
  content: { type: String, required: true },
  trContent: { type: String, required: true },
  date: { type: Date, required: true },
  followUpLink: { type: String },
}, { timestamps: true });

export default mongoose.model<INews>('News', NewsSchema); 