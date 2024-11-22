import { Document } from 'mongoose';

export interface IBaseDocument extends Document {
  createdAt: Date;
  updatedAt: Date;
}

export interface ITranslatedName {
  name: string;
  trName: string;
}

export interface ITranslatedLocation {
  location: string;
  trLocation: string;
}

export interface ITranslatedPlace {
  place: string;
  trPlace: string;
} 