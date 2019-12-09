import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from "../app-settings";


@Injectable({
    providedIn: 'root',
})
export class FoodService {

    applicationTypeHeader: HttpHeaders = new HttpHeaders().append('Content-Type', 'text/plain');


    constructor(private http: HttpClient) {

    }

    fetchFoodsFromDataCentralByFoodName(foodName: string) {

        return this.http.post('https://api.nal.usda.gov/fdc/v1/search?api_key=BkVA7N1vC11VKz7U8dRSEY2srId3cL4T986gpxbo',
            {"generalSearchInput": foodName});

    }

    fetchFoodDetailsByFoodId(foodId: string) {


        return this.http.get(`https://api.nal.usda.gov/fdc/v1/${foodId}?api_key=BkVA7N1vC11VKz7U8dRSEY2srId3cL4T986gpxbo`, {headers: this.applicationTypeHeader});

    }


    createFood(formData: FormData) {

        return this.http.post(`${AppSettings.API_ENDPOINT}/api/foods/create`, formData);
    }

    getFoodById(foodId: string) {
        return this.http.get(`${AppSettings.API_ENDPOINT}/api/foods/details/` + foodId);
    }

    getAllFoods() {
        return this.http.get(`${AppSettings.API_ENDPOINT}/api/foods/all/`);
    }


}
