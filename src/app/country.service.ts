import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }
  getService(): Observable<any> {
    return this.http.get(
      "https://sudharsana-countriesrestapi.azurewebsites.net/api/Countries/Countries"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }
  getAllCountry() : Observable<any>{
    return this.http.get("https://sudharsana-countriesrestapi.azurewebsites.net/api/Countries/Countries")
  }

}
