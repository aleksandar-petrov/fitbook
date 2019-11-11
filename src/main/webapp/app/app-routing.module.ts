import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AllExercisesComponent} from './exercise/all-exercises/all-exercises.component';
import {CreateExerciseComponent} from './exercise/create-exercise/create-exercise.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './user/register/register.component';
import {SigninComponent} from './user/signin/signin.component';
import {EditFitnessProfileComponent} from "./home/edit-fitness-profile/edit-fitness-profile.component";


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: IndexComponent},
  {path: 'exercises/all', component: AllExercisesComponent},
  {path: 'exercises/create', component: CreateExerciseComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'fitness-profile/edit', component: EditFitnessProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
