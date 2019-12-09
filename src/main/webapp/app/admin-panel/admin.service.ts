import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})
export class AdminService {

    applicationTypeHeader: HttpHeaders = new HttpHeaders().append('Content-Type', 'text/plain');


    constructor(private http: HttpClient) {

    }

    fetchAllUsers() {

        return this.http.get(`${CONSTANTS.DOMAIN}/api/users/all`);

    }



    promoteUser(userId: string) {


        return this.http.post(`${CONSTANTS.DOMAIN}/api/users/promote`, null, {params: new HttpParams().append('id', userId)});
    }

    demoteUser(userId: string) {
        return this.http.post(`${CONSTANTS.DOMAIN}/api/users/demote`, null, {params: new HttpParams().append('id', userId)});
    }


}
