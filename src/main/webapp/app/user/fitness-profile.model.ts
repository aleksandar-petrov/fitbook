import {NutritionGoal} from "./nutrition-goal.model";

export class FitnessProfileModel {
    weight: number;
    height: number;
    age: number;
    sportsExperience: string;
    activityLevel: string;
    weightGoal: string;
    weightChangeRate: string;
    nutritionGoal: NutritionGoal;

    constructor() {
      this.nutritionGoal = new NutritionGoal();
    }

}
