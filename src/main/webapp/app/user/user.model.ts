import {FitnessProfileModel} from './fitness-profile.model';

export class UserModel {
    firstName: string;
    lastName: string;
    gender: string;
    username: string;
    email: string;
    profilePictureURL: string;
    fitnessProfile: FitnessProfileModel;

    constructor() {
      this.fitnessProfile = new FitnessProfileModel();
    }


}
