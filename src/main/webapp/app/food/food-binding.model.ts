export class FoodBindingModel {
  name: string;
  description: string;
  proteinPerHundred: number;
  carbohydratesPerHundred: number;
  fatsPerHundred: number;

  constructor() {
    this.name = '';
    this.description = '';
  }
}
