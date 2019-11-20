export class Exercise {
  id: string;
  name: string;
  instructions: string;
  pictureURL: string;
  youtubeURL: string;
  majorMuscleGroup: string;
  assistingMuscleGroups: string[];

  constructor() {
    this.name = '';
    this.instructions = '';
    this.pictureURL = '';
    this.youtubeURL = '';
    this.majorMuscleGroup = '';
    this.assistingMuscleGroups = [];
  }
}
