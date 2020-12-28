import { Model } from 'mongoose';
import { ProjectDocument, ProjectType } from './project.model';
import { FeatureType } from '../feature/feature.model';

export interface IProjectService<T extends ProjectType> {
  createProject(project: T): Promise<T>;
  getSingleProject(projectId: string): Promise<T>;
  getManyProjects(projectId?: T): Promise<T[]>;
  updateProject(project: T): Promise<T>;
  deleteProject(projectId: string): Promise<T>;
  addFeature(projectId: string, feat: FeatureType): Promise<T>;
}
export class ProjectService implements IProjectService<ProjectType> {
  private _projectModel;

  constructor(projectModel: Model<ProjectDocument>) {
    this._projectModel = projectModel;
  }
  async createProject(project: ProjectType): Promise<ProjectType> {
    const proj = new this._projectModel(project);
    return await proj.save();
  }
  async getSingleProject(projectId: string): Promise<ProjectType> {
    return await this._projectModel.findById(projectId);
  }
  async getManyProjects(): Promise<ProjectType[]> {
    return await this._projectModel.find().exec();
  }
  async deleteProject(projectId: string): Promise<ProjectType> {
    return await this._projectModel.deleteOne({ _id: projectId });
  }
  async updateProject(project: ProjectType): Promise<ProjectType> {
    return await this._projectModel.update(project);
  }
  async addFeature(projectId: string, feat: FeatureType): Promise<ProjectType> {
    const willAdd = { $push: { features: feat } };
    return await this._projectModel.findOneAndUpdate({ _id: projectId }, willAdd);
  }
}
