export class FitnessProfileModel {
  constructor(
    public weight: number,
    public height: number,
    public age: number,
    public sportsExperience: string,
    public activityLevel: string,
    public weightGoal: string,
    public weightChangeRate: string,
    public currentCalories: number
  ) {
  }

}
