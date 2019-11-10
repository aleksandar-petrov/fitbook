export class FitnessProfileBindingModel {
  weight: number;
  height: number;
  age: number;
  sportsExperience: string;
  activityLevel: string;
  weightGoal: string;
  weightChangeRate: string;

  constructor() {
    this.sportsExperience = '';
    this.activityLevel = '';
    this.weightGoal = '';
    this.weightChangeRate = 'none';
  }
}
