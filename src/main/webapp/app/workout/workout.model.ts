import {WorkoutExercise} from "./workout-exercise.model";
import {Creator} from "../creator-model";

export class Workout {
    id: string;
    name: string;
    exercises: WorkoutExercise[];
    isPublic: boolean;
    creator: Creator;
    isCopied: boolean;
    likesCount: number;
    isLiked: boolean;
}
