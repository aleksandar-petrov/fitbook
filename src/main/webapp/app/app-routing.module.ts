import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AllExercisesComponent} from './exercise/all-exercises/all-exercises.component';
import {CreateExerciseComponent} from './exercise/create-exercise/create-exercise.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './user/register/register.component';
import {SigninComponent} from './user/signin/signin.component';
import {EditFitnessProfileComponent} from "./home/edit-fitness-profile/edit-fitness-profile.component";
import {MyWorkoutsComponent} from "./workout/my-workouts/my-workouts.component";
import {NoSelectedWorkoutComponent} from "./workout/my-workouts/no-selected-workout/no-selected-workout.component";
import {SelectedWorkoutComponent} from "./workout/my-workouts/selected-workout/selected-workout.component";
import {ExerciseDetailsComponent} from "./exercise/exercise-details/exercise-details.component";
import {EditSelectedWorkoutComponent} from "./workout/my-workouts/edit-selected-workout/edit-selected-workout.component";
import {AllWorkoutsComponent} from "./workout/all-workouts/all-workouts.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {WorkoutDetailsComponent} from "./workout/workout-details/workout-details.component";
import {MyWorkoutPlansComponent} from "./workout/my-workout-plans/my-workout-plans.component";
import {NoSelectedWorkoutPlanComponent} from "./workout/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component";
import {SelectedWorkoutPlanComponent} from "./workout/my-workout-plans/selected-workout-plan/selected-workout-plan.component";
import {AllWorkoutPlansComponent} from "./workout/all-workout-plans/all-workout-plans.component";
import {WorkoutPlanDetailsComponent} from "./workout/workout-plan-details/workout-plan-details.component";
import {SearchFoodComponent} from "./food/search-food/search-food.component";


const appRoutes: Routes = [
    {path: '', pathMatch: 'full', component: IndexComponent},
    {path: 'exercises/all', component: AllExercisesComponent},
    {path: 'exercises/create', component: CreateExerciseComponent},
    {path: 'exercises/details/:id', component: ExerciseDetailsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'fitness-profile/edit', component: EditFitnessProfileComponent},
    {
        path: 'my-workouts', component: MyWorkoutsComponent, children: [
            {path: '', component: NoSelectedWorkoutComponent},
            {path: ':id', component: SelectedWorkoutComponent},
        ]
    }, {
        path: 'my-workout-plans', component: MyWorkoutPlansComponent, children: [
            {path: '', component: NoSelectedWorkoutPlanComponent},
            {path: ':id', component: SelectedWorkoutPlanComponent},
        ]
    },
    {path: 'workouts/all', component: AllWorkoutsComponent},
    {path: 'workouts/details/:id', component: WorkoutDetailsComponent},
    {path: 'workout-plans/all', component: AllWorkoutPlansComponent},
    {path: 'workout-plans/details/:id', component: WorkoutPlanDetailsComponent},
    {path: 'foods/search', component: SearchFoodComponent},
    {path: 'profile/:username', component: UserProfileComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
