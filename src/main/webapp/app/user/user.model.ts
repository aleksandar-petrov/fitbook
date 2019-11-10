import {FitnessProfileModel} from './fitness-profile.model';

export class UserModel {
  constructor(
    public firstName: string,
    public lastName: string,
    public gender: string,
    public username: string,
    public email: string,
    public profilePictureURL: string,
    public fitnessProfile: FitnessProfileModel,
  ) {
  }

}
