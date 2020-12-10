import { SchemaTypes, Schema } from 'mongoose';

export const ProjectSchema: Schema = new Schema({
  stakeholders: [SchemaTypes.ObjectId],
  progress: SchemaTypes.Decimal128,
});
