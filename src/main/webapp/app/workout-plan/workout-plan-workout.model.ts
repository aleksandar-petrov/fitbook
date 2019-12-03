import {Exercise} from "../exercise/exercise.model";
import {Workout} from "../workout/workout.model";

export class WorkoutPlanWorkout {
  id: string;
  orderIndex: number;
  workout: Workout;
}
