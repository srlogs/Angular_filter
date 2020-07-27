import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-continentname',
  templateUrl: './continentname.component.html',
  styleUrls: ['./continentname.component.css']
})
export class ContinentnameComponent implements OnInit {
  countryData
  constructor(private countryService : CountryService) {
  }
  OnInput(value) {
 // this.serverName = value;
 // console.log(this.serverName);
 this.countryService.getContinent(value).subscribe(
        country => {
          this.countryData = country;
          console.log(this.countryData);
        },
        err => console.log("error",err),
        () => console.log("finally")
      )
}
ngOnInit(): void {
}

}
