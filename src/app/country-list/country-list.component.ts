import { Component, OnInit } from '@angular/core';
import { CityI } from '../city/city.interface';
import { CountryServiceService } from '../country-service.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  cities: CityI[] = [];

  constructor(private countryservice: CountryServiceService) { }

  ngOnInit(): void {
    this.countryservice.getAllCities().subscribe(data => this.cities = data)
  }
}
