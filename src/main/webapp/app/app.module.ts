import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {IndexComponent} from './index/index.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FooterComponent} from './footer/footer.component';
import {CreateExerciseComponent} from './exercise/create-exercise/create-exercise.component';
import {MuscleSelectorComponent} from './muscle-selector/muscle-selector.component';
import {GuestNavbarComponent} from './navbar/guest-navbar/guest-navbar.component';
import {LoggedNavbarComponent} from './navbar/logged-navbar/logged-navbar.component';
import {FoodComponent} from './food/food.component';
import {AllExercisesComponent} from './exercise/all-exercises/all-exercises.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {ExerciseCardComponent} from './exercise/exercise-card/exercise-card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GetConstantViewNamePipe} from './get-constant-view-name.pipe';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RegisterComponent} from './user/register/register.component';
import {SigninComponent} from './user/signin/signin.component';
import {CreateFitnessProfileComponent} from './home/create-fitness-profile/create-fitness-profile.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {MyProfileComponent} from './home/my-profile/my-profile.component';
import {EditFitnessProfileComponent} from './home/edit-fitness-profile/edit-fitness-profile.component';
import {MyWorkoutsComponent} from './workout/my-workouts/my-workouts.component';
import {NoSelectedWorkoutComponent} from './workout/my-workouts/no-selected-workout/no-selected-workout.component';
import {SelectedWorkoutComponent} from './workout/my-workouts/selected-workout/selected-workout.component';
import {ExerciseDetailsComponent} from './exercise/exercise-details/exercise-details.component';
import {SafePipe} from "./safe.pipe";
import {NgxYoutubePlayerModule} from "ngx-youtube-player";
import {EditSelectedWorkoutComponent} from './workout/my-workouts/edit-selected-workout/edit-selected-workout.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {AllWorkoutsComponent} from './workout/all-workouts/all-workouts.component';
import {WorkoutCardComponent} from './workout/workout-card/workout-card.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {NgxChartsModule, PieChartModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {WorkoutDetailsComponent} from './workout/workout-details/workout-details.component';
import {MyWorkoutPlansComponent} from './workoutPlan/my-workout-plans/my-workout-plans.component';
import {NoSelectedWorkoutPlanComponent} from './workoutPlan/my-workout-plans/no-selected-workout-plan/no-selected-workout-plan.component';
import {SelectedWorkoutPlanComponent} from './workoutPlan/my-workout-plans/selected-workout-plan/selected-workout-plan.component';
import {AllWorkoutPlansComponent} from './workoutPlan/all-workout-plans/all-workout-plans.component';
import {WorkoutPlanDetailsComponent} from './workoutPlan/workout-plan-details/workout-plan-details.component';
import {WorkoutPlanCardComponent} from './workoutPlan/workout-plan-card/workout-plan-card.component';
import {SearchFoodComponent} from './food/search-food/search-food.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { FoodDetailsComponent } from './food/food-details/food-details.component';
import { AllMealsComponent } from './meal/all-meals/all-meals.component';
import { MyMealsComponent } from './meal/my-meals/my-meals.component';
import { MealCardComponent } from './meal/meal-card/meal-card.component';
import { MealDetailsComponent } from './meal/meal-details/meal-details.component';
import { AllFoodsComponent } from './food/all-foods/all-foods.component';
import { FoodCardComponent } from './food/food-card/food-card.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        IndexComponent,
        FooterComponent,
        CreateExerciseComponent,
        MuscleSelectorComponent,
        GuestNavbarComponent,
        LoggedNavbarComponent,
        FoodComponent,
        AllExercisesComponent,
        ExerciseCardComponent,
        GetConstantViewNamePipe,
        RegisterComponent,
        SigninComponent,
        CreateFitnessProfileComponent,
        MyProfileComponent,
        EditFitnessProfileComponent,
        MyWorkoutsComponent,
        NoSelectedWorkoutComponent,
        SelectedWorkoutComponent,
        ExerciseDetailsComponent,
        SafePipe,
        EditSelectedWorkoutComponent,
        AllWorkoutsComponent,
        WorkoutCardComponent,
        UserProfileComponent,
        WorkoutDetailsComponent,
        MyWorkoutPlansComponent,
        NoSelectedWorkoutPlanComponent,
        SelectedWorkoutPlanComponent,
        AllWorkoutPlansComponent,
        WorkoutPlanDetailsComponent,
        WorkoutPlanCardComponent,
        SearchFoodComponent,
        AdminPanelComponent,
        FoodDetailsComponent,
        AllMealsComponent,
        MyMealsComponent,
        MealCardComponent,
        MealDetailsComponent,
        AllFoodsComponent,
        FoodCardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FontAwesomeModule,
        NgbModule,
        FormsModule,
        AppRoutingModule,
        NgxYoutubePlayerModule,
        DragDropModule,
        PieChartModule,
        BrowserAnimationsModule,
        NgxChartsModule
    ],
    providers: [SafePipe, GetConstantViewNamePipe, {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}
