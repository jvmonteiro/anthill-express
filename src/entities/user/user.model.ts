import { Document, Model, model, ObjectId, Schema, SchemaType, SchemaTypes } from 'mongoose';

export type UserType = {
  email: string;
  password: string;
  projects: [];
};

export type UserDocument = UserType & Document;

export const UserSchema = (): Schema<UserType> =>
  new Schema<UserType>({
    email: SchemaTypes.String,
    password: SchemaTypes.String,
    projects: [],
  });

export const User = (schema: Schema<UserType>): Model<UserDocument> => model('User', schema);
