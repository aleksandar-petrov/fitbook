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
import { CreateFitnessProfileComponent } from './home/create-fitness-profile/create-fitness-profile.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import { MyProfileComponent } from './home/my-profile/my-profile.component';
import { EditFitnessProfileComponent } from './home/edit-fitness-profile/edit-fitness-profile.component';

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
    EditFitnessProfileComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FontAwesomeModule, NgbModule, FormsModule, AppRoutingModule
  ],
  providers: [GetConstantViewNamePipe, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}