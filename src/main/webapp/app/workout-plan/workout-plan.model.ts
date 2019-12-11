import {Creator} from "../creator-model";
import {WorkoutPlanWorkout} from "./workout-plan-workout.model";
import {CommentModel} from "../comment/comment.model";

export class WorkoutPlan {
    id: string;
    name: string;
    workouts: WorkoutPlanWorkout[];
    isPublic: boolean;
    creator: Creator;
    isCopied: boolean;
    likesCount: number;
    isLiked: boolean;
    comments: CommentModel[];
}
