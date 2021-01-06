import { Model } from 'mongoose';
import { UserDocument, UserType } from './user.model';
import { hashSync, genSaltSync, compareSync } from 'bcrypt';
export interface IUserService<T extends UserType> {
  register(user: T): Promise<T>;
}
export class UserService implements IUserService<UserType> {
  private _userModel;

  constructor(userModel: Model<UserDocument>) {
    this._userModel = userModel;
  }
  async register(user: UserType): Promise<UserType> {
    const newUser = new this._userModel(user);
    newUser.password = hashSync(newUser.password, genSaltSync());
    return await newUser.save();
  }
  async getSingleUser(userEmail: string): Promise<UserDocument> {
    return await this._userModel.findOne({ email: userEmail }).exec();
  }
  async correctLogin(
    tentativeUser: Partial<UserType>,
    registeredUser: Partial<UserType>,
  ): Promise<boolean> {
    if (tentativeUser.email !== registeredUser.email) return false;
    if (!compareSync(tentativeUser.password, registeredUser.password)) return false;
    return true;
  }
}
