import {Creator} from "../creator-model";
import {DietPlanMeal} from "./diet-plan-meal.model";

export class DietPlan {
    id: string;
    name: string;
    meals: DietPlanMeal[];
    isPublic: boolean;
    creator: Creator;
    isCopied: boolean;
    totalProtein: number;
    totalCarbohydrates: number;
    totalFats: number;
    totalCalories: number;
}
