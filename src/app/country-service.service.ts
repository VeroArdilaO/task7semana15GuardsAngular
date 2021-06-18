import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { CityI } from './city/city.interface';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CountryServiceService {

  private urlAPI = 'https://us-central1-softlabs-30335.cloudfunctions.net/countries'

  constructor(private http : HttpClient) { }

    getAllCities(): Observable<CityI[]> {
      return this.http.get<CityI[]>(this.urlAPI);
    }  
}
