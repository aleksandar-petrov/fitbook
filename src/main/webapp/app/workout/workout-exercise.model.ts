import {Exercise} from "../exercise/exercise.model";

export class WorkoutExercise {
  id: string;
  orderIndex: number;
  sets: number;
  reps: number;
  exercise: Exercise;
}
