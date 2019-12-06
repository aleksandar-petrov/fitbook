import {Injectable} from "@angular/core";
import {DietPlanBindingModel} from "./diet-plan-binding-model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {DietPlan} from "./diet-plan.model";


@Injectable({
    providedIn: 'root',
})
export class DietPlanService {


    constructor(private http: HttpClient) {

    }

    createDietPlan(dietPlanBindingModel: DietPlanBindingModel) {

        return this.http.post('http://localhost:8000/api/diet-plans/create', dietPlanBindingModel);

    }

    getLoggedInUserDietPlans() {

        return this.http.get('http://localhost:8000/api/diet-plans/my');

    }


    deleteMyDietPlan(dietPlanId: string) {

        return this.http.delete('http://localhost:8000/api/diet-plans/delete/' + dietPlanId);

    }

    editMyDietPlan(dietPlanId: string, dietPlanEditBindingModel: DietPlan) {

        return this.http.put('http://localhost:8000/api/diet-plans/edit/' + dietPlanId, dietPlanEditBindingModel);

    }

    getAllPublicDietPlans() {

        return this.http.get('http://localhost:8000/api/diet-plans/public/all');

    }

    getDietPlanById(dietPlanId: string) {

        return this.http.get('http://localhost:8000/api/diet-plans/' + dietPlanId);

    }

    copyDietPlanToMyDietPlans(dietPlanId: string) {

        return this.http.post('http://localhost:8000/api/diet-plans/copy/' + dietPlanId, null);
    }

    addMealFromMyMealsToMyDietPlan(dietPlanId: string, mealId: string) {

        const params = new HttpParams().append('mealId', mealId);

        return this.http.post('http://localhost:8000/api/diet-plans/add-meal/' + dietPlanId, null, {params: params});

    }

    exportDietPlanToExcel(dietPlanId: string) {

        return this.http.get('http://localhost:8000/api/diet-plans/export/excel/' + dietPlanId, {responseType: "blob"});
    }

}
