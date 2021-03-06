import { Model } from 'mongoose';
import { FeatureDocument, FeatureType } from './feature.model';

export interface IFeatureService<T extends FeatureType> {
  createFeature(feat: T): Promise<T>;
  getSingleFeature(featId: string): Promise<T>;
  getManyFeatures(featId?: T): Promise<T[]>;
  updateFeature(feat: T): Promise<T>;
  deleteFeature(featId: string): Promise<T>;
}
export class FeatureService implements IFeatureService<FeatureType> {
  private _featureModel;

  constructor(featureModel: Model<FeatureDocument>) {
    this._featureModel = featureModel;
  }
  async createFeature(feat: FeatureType): Promise<FeatureType> {
    const feature = new this._featureModel(feat);
    return await feature.save();
  }
  async getSingleFeature(featId: string): Promise<FeatureType> {
    return await this._featureModel.findById(featId);
  }
  async getManyFeatures(): Promise<FeatureType[]> {
    return await this._featureModel.find().exec();
  }
  async deleteFeature(featId: string): Promise<FeatureType> {
    return await this._featureModel.deleteOne({ _id: featId });
  }
  async updateFeature(feat: FeatureType): Promise<FeatureType> {
    return await this._featureModel.update(feat);
  }
}
