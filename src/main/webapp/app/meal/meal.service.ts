import {HttpClient, HttpParams} from "@angular/common/http";
import {MealBindingModel} from "./meal-binding-model";
import {Injectable} from "@angular/core";
import {MealFoodBindingModel} from "./meal-food-binding-model";


@Injectable({
    providedIn: 'root',
})
export class MealService {


    constructor(private http: HttpClient) {

    }

    createMeal(mealCreateModel: MealBindingModel) {

        return this.http.post('/api/meals/create', mealCreateModel);
    }

    addMealFoodToMeal(mealFoodBindingModel: MealFoodBindingModel, mealId: string) {

        return this.http.post('/api/meals/add-exercise/' + mealId, mealFoodBindingModel);
    }


    fetchAllPublicMeals() {

        return this.http.get('/api/meals/public/all');
    }

    fetchMealById(id: string) {

        return this.http.get('/api/meals/' + id);
    }

    getLoggedInUserMeals() {

        return this.http.get('/api/meals/my/');
    }


    deleteMealFoodFromMeal(mealId: string, foodId: string) {

        const params = new HttpParams().append('foodId', foodId);
        return this.http.delete('/api/meals/delete-exercise/' + mealId, {params: params});
    }

    deleteMealById(mealId: string) {

        return this.http.delete('/api/meals/delete/' + mealId);
    }

    editMealById(mealId: string, mealBindingModel: MealBindingModel) {

        return this.http.put('/api/meals/edit/' + mealId, mealBindingModel);
    }

    copyMealToLoggedUserMeals(mealId: string) {

        return this.http.post('/api/meals/copy/' + mealId, null);
    }

}
