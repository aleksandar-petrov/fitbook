export class Exercise {
  id: string;
  name: string;
  instructions: string;
  pictureURL: string;
  youtubeURL: string;
  majorMuscleGroup: string;
  assistingMuscleGroups: string[];
  workoutsCounter: number;

  constructor() {
    this.name = '';
    this.instructions = '';
    this.pictureURL = '';
    this.youtubeURL = '';
    this.majorMuscleGroup = '';
    this.assistingMuscleGroups = [];
  }
}
