import {Food} from "../food/food.model";

export class MealFood {
  id: string;
  orderIndex: number;
  serving: number;
  caloriesPerServing: number;
  proteinPerServing: number;
  carbohydratesPerServing: number;
  fatsPerServing: number;
  food: Food;
}
