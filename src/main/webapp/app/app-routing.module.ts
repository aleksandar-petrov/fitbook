import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {AllWorkoutsComponent} from "./workout/all-workouts/all-workouts.component";
import {UserProfileComponent} from "./user/user-profile/user-profile.component";
import {WorkoutDetailsComponent} from "./workout/workout-details/workout-details.component";
import {MyWorkoutPlansComponent} from "./workout-plan/my-workout-plans/my-workout-plans.component";
import {NoSelectedWorkoutPlanComponent} from "./workout-plan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component";
import {SelectedWorkoutPlanComponent} from "./workout-plan/my-workout-plans/selected-workout-plan/selected-workout-plan.component";
import {AllWorkoutPlansComponent} from "./workout-plan/all-workout-plans/all-workout-plans.component";
import {WorkoutPlanDetailsComponent} from "./workout-plan/workout-plan-details/workout-plan-details.component";
import {SearchFoodComponent} from "./food/search-food/search-food.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";
import {FoodDetailsComponent} from "./food/food-details/food-details.component";
import {AllFoodsComponent} from "./food/all-foods/all-foods.component";
import {MyMealsComponent} from "./meal/my-meals/my-meals.component";
import {NoSelectedMealComponent} from "./meal/my-meals/no-selected-meal/no-selected-meal.component";
import {SelectedMealComponent} from "./meal/my-meals/selected-meal/selected-meal.component";
import {AllMealsComponent} from "./meal/all-meals/all-meals.component";
import {MealDetailsComponent} from "./meal/meal-details/meal-details.component";
import {MyDietPlansComponent} from "./diet-plan/my-diet-plans/my-diet-plans.component";
import {NoSelectedDietPlanComponent} from "./diet-plan/my-diet-plans/no-selected-diet-plan/no-selected-diet-plan.component";
import {SelectedDietPlanComponent} from "./diet-plan/my-diet-plans/selected-diet-plan/selected-diet-plan.component";
import {AllDietPlansComponent} from "./diet-plan/all-diet-plans/all-diet-plans.component";
import {DietPlanDetailsComponent} from "./diet-plan/diet-plan-details/diet-plan-details.component";
import {AuthGuard} from "./auth/auth.guard";
import {LoggedGuard} from "./home/logged.guard";
import {ModeratorGuard} from "./auth/moderator.guard";
import {AdminGuard} from "./auth/admin.guard";
import {FitnessProfileGuard} from "./home/fitness-profile.guard";
import {NotFoundComponent} from "./not-found/not-found.component";


const appRoutes: Routes = [
    {path: '', pathMatch: 'full', component: IndexComponent, canActivate: [LoggedGuard]},
    {path: 'exercises/all', component: AllExercisesComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'exercises/create', component: CreateExerciseComponent, canActivate: [ModeratorGuard, FitnessProfileGuard]},
    {path: 'exercises/details/:id', component: ExerciseDetailsComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'register', component: RegisterComponent, canActivate: [LoggedGuard]},
    {path: 'signin', component: SigninComponent, canActivate: [LoggedGuard]},
    {path: 'fitness-profile/edit', component: EditFitnessProfileComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {
        path: 'my-workouts', component: MyWorkoutsComponent, canActivate: [AuthGuard, FitnessProfileGuard], children: [
            {path: '', component: NoSelectedWorkoutComponent},
            {path: ':id', component: SelectedWorkoutComponent},
        ]
    }, {
        path: 'my-workout-plans', component: MyWorkoutPlansComponent, canActivate: [AuthGuard, FitnessProfileGuard], children: [
            {path: '', component: NoSelectedWorkoutPlanComponent},
            {path: ':id', component: SelectedWorkoutPlanComponent},
        ]
    }, {
        path: 'my-meals', component: MyMealsComponent, canActivate: [AuthGuard, FitnessProfileGuard], children: [
            {path: '', component: NoSelectedMealComponent},
            {path: ':id', component: SelectedMealComponent},
        ]
    }, {
        path: 'my-diet-plans', component: MyDietPlansComponent, canActivate: [AuthGuard, FitnessProfileGuard], children: [
            {path: '', component: NoSelectedDietPlanComponent},
            {path: ':id', component: SelectedDietPlanComponent},
        ]
    },
    {path: 'workouts/all', component: AllWorkoutsComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'workouts/details/:id', component: WorkoutDetailsComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'workout-plans/all', component: AllWorkoutPlansComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'workout-plans/details/:id', component: WorkoutPlanDetailsComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'meals/all', component: AllMealsComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'meals/details/:id', component: MealDetailsComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'diet-plans/all', component: AllDietPlansComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'diet-plans/details/:id', component: DietPlanDetailsComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'foods/create', component: SearchFoodComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'foods/all', component: AllFoodsComponent, canActivate: [AuthGuard, FitnessProfileGuard, FitnessProfileGuard]},
    {path: 'foods/details/:id', component: FoodDetailsComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'profile/:username', component: UserProfileComponent, canActivate: [AuthGuard, FitnessProfileGuard]},
    {path: 'admin-panel', component: AdminPanelComponent, canActivate: [AdminGuard, FitnessProfileGuard]},
    {path: '404', component: NotFoundComponent},
    {path: '**', redirectTo: '/404'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'disabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
