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
import { FeatureType } from '../feature/feature.model';

export type ProjectType = {
  name: string;
  description: string;
  features: [FeatureType];
  stakeholders: [ObjectId];
};

export type ProjectDocument = ProjectType & Document;

export const ProjectSchema = (): Schema<ProjectType> =>
  new Schema<ProjectType>({
    name: SchemaTypes.String,
    description: SchemaTypes.String,
    features: [SchemaTypes.ObjectId],
    stakeholders: [SchemaTypes.ObjectId],
  });

export const Project = (schema: Schema<ProjectType>): Model<ProjectDocument> =>
  model('Project', schema);
