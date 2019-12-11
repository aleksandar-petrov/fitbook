import {Creator} from "../creator-model";
import {MealFood} from "./meal-food.model";
import {CommentModel} from "../comment/comment.model";

export class Meal {
    id: string;
    name: string;
    foods: MealFood[];
    isPublic: boolean;
    creator: Creator;
    isCopied: boolean;
    totalCalories: number;
    totalProtein: number;
    totalCarbohydrates: number;
    totalFats: number;
    likesCount: number;
    isLiked: boolean;
    comments: CommentModel[];
}
