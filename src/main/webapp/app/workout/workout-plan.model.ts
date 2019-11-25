import {Creator} from "./creator-model";
import {WorkoutPlanWorkout} from "./workout-plan-workout.model";

export class WorkoutPlan {
    id: string;
    name: string;
    workouts: WorkoutPlanWorkout[];
    isPublic: boolean;
    creator: Creator;
    isCopied: boolean;
}
