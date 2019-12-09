import {Injectable} from "@angular/core";
import {DietPlanBindingModel} from "./diet-plan-binding-model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {DietPlan} from "./diet-plan.model";
import {AppSettings} from "../app-settings";


@Injectable({
    providedIn: 'root',
})
export class DietPlanService {


    constructor(private http: HttpClient) {

    }

    createDietPlan(dietPlanBindingModel: DietPlanBindingModel) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/diet-plans/create`, dietPlanBindingModel);

    }

    getLoggedInUserDietPlans() {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/diet-plans/my`);

    }


    deleteMyDietPlan(dietPlanId: string) {

        return this.http.delete(`${AppSettings.API_ENDPOINT}/api/diet-plans/delete/` + dietPlanId);

    }

    editMyDietPlan(dietPlanId: string, dietPlanEditBindingModel: DietPlan) {

        return this.http.put(`${AppSettings.API_ENDPOINT}/api/diet-plans/edit/` + dietPlanId, dietPlanEditBindingModel);

    }

    getAllPublicDietPlans() {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/diet-plans/public/all`);

    }

    getDietPlanById(dietPlanId: string) {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/diet-plans/` + dietPlanId);

    }

    copyDietPlanToMyDietPlans(dietPlanId: string) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/diet-plans/copy/` + dietPlanId, null);
    }

    addMealFromMyMealsToMyDietPlan(dietPlanId: string, mealId: string) {

        const params = new HttpParams().append('mealId', mealId);

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/diet-plans/add-meal/` + dietPlanId, null, {params: params});

    }

    exportDietPlanToExcel(dietPlanId: string) {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/diet-plans/export/excel/` + dietPlanId, {responseType: "blob"});
    }

}
