import { ProjectSchema } from './project.schema';
import { model } from 'mongoose';

export const Project = () => model('Project', ProjectSchema());
