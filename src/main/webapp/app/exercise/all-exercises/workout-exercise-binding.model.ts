export class WorkoutExerciseBindingModel {
  reps: number;
  sets: number;
  exerciseId: string;

  constructor() {
    this.reps = 1;
    this.sets = 1;
    this.exerciseId = null;
  }

}
