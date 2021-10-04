import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs/Observable";


@Injectable()
export class ThemeService{
    public url: String;

    constructor(
        private _http: HttpClient
    ){
        this.url = 'http://localhost:4000/api';
    }

    getThemes(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/themes', {headers: headers});
    }

    getThemeById(id: String): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url+'/themes/'+id, {headers: headers});
    }

}