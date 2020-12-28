import { FeatureType } from '../feature/feature.model';
import { ProjectType } from './project.model';
import { IProjectService } from './project.svc';

export class ProjectController<T extends ProjectType> {
  private _projSvc: IProjectService<T>;
  constructor(projSvc: IProjectService<T>) {
    this._projSvc = projSvc;
  }

  async createProject(proj: T): Promise<ProjectType> {
    return this._projSvc.createProject(proj);
  }
  async getSingleProject(projId: string): Promise<ProjectType> {
    return await this._projSvc.getSingleProject(projId);
  }
  async getManyProjects(): Promise<ProjectType[]> {
    return await this._projSvc.getManyProjects();
  }
  async deleteProject(projId: string): Promise<ProjectType> {
    return await this._projSvc.deleteProject(projId);
  }
  async updateProject(proj: T): Promise<ProjectType> {
    return await this._projSvc.updateProject(proj);
  }

  async addFeature(projId: string, feat: FeatureType) {
    return await this._projSvc.addFeature(projId, feat);
  }
}
