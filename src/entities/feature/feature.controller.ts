import { FeatureType } from './feature.model';
import { IFeatureService } from './feature.svc';

export class FeatureController<T extends FeatureType> {
  private _featSvc: IFeatureService<T>;
  constructor(featSvc: IFeatureService<T>) {
    this._featSvc = featSvc;
  }

  async createFeature(feat: T): Promise<FeatureType> {
    return this._featSvc.createFeature(feat);
  }
  async getSingleFeature(featId: string): Promise<FeatureType> {
    return await this._featSvc.getSingleFeature(featId);
  }
  async getManyFeatures(): Promise<FeatureType[]> {
    return await this._featSvc.getManyFeatures();
  }
  async deleteFeature(featId: string): Promise<FeatureType> {
    return await this._featSvc.deleteFeature(featId);
  }
  async updateFeature(feat: T): Promise<FeatureType> {
    return await this._featSvc.updateFeature(feat);
  }
}
