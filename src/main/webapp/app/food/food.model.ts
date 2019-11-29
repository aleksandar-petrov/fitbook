export class Food {
  id: string;
  name: string;
  description: string;
  pictureUrl: string;
  proteinPerHundred: number;
  carbohydratesPerHundred: number;
  fatsPerHundred: number;
  caloriesPerHundred: number;

  constructor() {
    this.name = '';
    this.description = '';
    this.pictureUrl = '';
  }
}
