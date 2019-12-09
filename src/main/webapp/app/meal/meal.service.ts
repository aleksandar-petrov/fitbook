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

        return this.http.post(`${CONSTANTS.DOMAIN}/api/meals/create`, mealCreateModel);
    }

    addMealFoodToMeal(mealFoodBindingModel: MealFoodBindingModel, mealId: string) {

        return this.http.post(`${CONSTANTS.DOMAIN}/api/meals/add-exercise/` + mealId, mealFoodBindingModel);
    }


    fetchAllPublicMeals() {

        return this.http.get(`${CONSTANTS.DOMAIN}/api/meals/public/all`);
    }

    fetchMealById(id: string) {

        return this.http.get(`${CONSTANTS.DOMAIN}/api/meals/` + id);
    }

    getLoggedInUserMeals() {

        return this.http.get(`${CONSTANTS.DOMAIN}/api/meals/my/`);
    }


    deleteMealFoodFromMeal(mealId: string, foodId: string) {

        const params = new HttpParams().append('foodId', foodId);
        return this.http.delete(`${CONSTANTS.DOMAIN}/api/meals/delete-exercise/` + mealId, {params: params});
    }

    deleteMealById(mealId: string) {

        return this.http.delete(`${CONSTANTS.DOMAIN}/api/meals/delete/` + mealId);
    }

    editMealById(mealId: string, mealBindingModel: MealBindingModel) {

        return this.http.put(`${CONSTANTS.DOMAIN}/api/meals/edit/` + mealId, mealBindingModel);
    }

    copyMealToLoggedUserMeals(mealId: string) {

        return this.http.post(`${CONSTANTS.DOMAIN}/api/meals/copy/` + mealId, null);
    }

}
