import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AppSettings} from "../app-settings";


@Injectable({
    providedIn: 'root',
})
export class AdminService {

    applicationTypeHeader: HttpHeaders = new HttpHeaders().append('Content-Type', 'text/plain');


    constructor(private http: HttpClient) {

    }

    fetchAllUsers() {

        return this.http.get(`${AppSettings.API_ENDPOINT}/api/users/all`);

    }



    promoteUser(userId: string) {


        return this.http.post(`${AppSettings.API_ENDPOINT}/api/users/promote`, null, {params: new HttpParams().append('id', userId)});
    }

    demoteUser(userId: string) {
        return this.http.post(`${AppSettings.API_ENDPOINT}/api/users/demote`, null, {params: new HttpParams().append('id', userId)});
    }


}
