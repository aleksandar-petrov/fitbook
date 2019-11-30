export class Food {
  id: string;
  name: string;
  description: string;
  pictureURL: string;
  proteinPerHundred: number;
  carbohydratesPerHundred: number;
  fatsPerHundred: number;
  caloriesPerHundred: number;

  constructor() {
    this.name = '';
    this.description = '';
    this.pictureURL = '';
  }
}
