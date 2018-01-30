import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from 'app/Models/User';

@Injectable()
export class UserService {

    constructor(private _http: Http) { }

    SelectedUser: User;

    Insert(user: User): Observable<boolean>{
        let url = "http://localhost:1056/api/home";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });  
        return this._http.post(url, user, options)
        .map((response: Response) => {
            return true;
        })
    }

    GetAllUsers(): Observable<User[]>{
        let url = "http://localhost:1056/api/home";
        let headers = new Headers();
        this.createHeaders(headers);
        return this._http.get(url, {
            headers: headers
        }).map((response: Response)=> {
            return response.json();
        })
    }

    createHeaders(headers: Headers){
        let token = localStorage.getItem("Token")
        headers.append('Authorization', token);
    }

    Update(user: User): Observable<boolean>{
        let url = "http://localhost:1056/api/home";
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this.createHeaders(headers);  
        return this._http.put(url, user, options)
        .map((response: Response) => {
            return true;
        })
    }
}