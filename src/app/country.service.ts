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
      "https://restcountries.eu/rest/v2/all"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }
  getAllCountry() : Observable<any>{
    return this.http.get("https://restcountries.eu/rest/v2/all")
  }

  getCountryData(value) : Observable<any>{
    return this.http.get(`https://restcountries.eu/rest/v2/alpha/${value}`);
  }

  getContinent(value) : Observable<any>{
    return this.http.get(`https://restcountries.eu/rest/v2/region/${value}`);
  }

  getCapital(value) : Observable<any> {
    return this.http.get(`https://restcountries.eu/rest/v2/capital/${value}`);
  }

}
