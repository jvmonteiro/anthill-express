import {
  Decimal128,
  Document,
  Model,
  model,
  Number,
  ObjectId,
  Schema,
  SchemaTypes,
} from 'mongoose';

export type FeatureType = {
  points: Number;
  progress: Decimal128;
  members: [ObjectId];
};

export type FeatureDocument = FeatureType & Document;

export const FeatureSchema = (): Schema<FeatureType> =>
  new Schema<FeatureType>({
    points: SchemaTypes.Number,
    progress: SchemaTypes.Decimal128,
    members: [SchemaTypes.ObjectId],
  });

export const Feature = (schema: Schema<FeatureType>): Model<FeatureDocument> =>
  model('Feature', schema);
