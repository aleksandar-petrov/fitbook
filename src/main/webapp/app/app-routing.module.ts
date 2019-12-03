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
    }, {
        path: 'my-meals', component: MyMealsComponent, children: [
            {path: '', component: NoSelectedMealComponent},
            {path: ':id', component: SelectedMealComponent},
        ]
    }, {
        path: 'my-diet-plans', component: MyDietPlansComponent, children: [
            {path: '', component: NoSelectedDietPlanComponent},
            {path: ':id', component: SelectedDietPlanComponent},
        ]
    },
    {path: 'workouts/all', component: AllWorkoutsComponent},
    {path: 'workouts/details/:id', component: WorkoutDetailsComponent},
    {path: 'workout-plans/all', component: AllWorkoutPlansComponent},
    {path: 'workout-plans/details/:id', component: WorkoutPlanDetailsComponent},
    {path: 'meals/all', component: AllMealsComponent},
    {path: 'meals/details/:id', component: MealDetailsComponent},
    {path: 'diet-plans/all', component: AllDietPlansComponent},
    {path: 'diet-plans/details/:id', component: DietPlanDetailsComponent},
    {path: 'foods/create', component: SearchFoodComponent},
    {path: 'foods/all', component: AllFoodsComponent},
    {path: 'foods/details/:id', component: FoodDetailsComponent},
    {path: 'profile/:username', component: UserProfileComponent},
    {path: 'admin-panel', component: AdminPanelComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { scrollPositionRestoration: 'disabled' })],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
