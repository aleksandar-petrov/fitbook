import {Creator} from "../creator-model";
import {MealFood} from "./meal-food.model";

export class Meal {
    id: string;
    name: string;
    foods: MealFood[];
    isPublic: boolean;
    creator: Creator;
    isCopied: boolean;
}
