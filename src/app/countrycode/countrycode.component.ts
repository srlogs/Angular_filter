import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countrycode',
  templateUrl: './countrycode.component.html',
  styleUrls: ['./countrycode.component.css']
})
export class CountrycodeComponent implements OnInit {
  countryData;
  show: boolean;
  constructor(private countryService : CountryService) {
  }
  OnInput(value) {
 // this.serverName = value;
 // console.log(this.serverName);
 this.countryService.getCountryData(value).subscribe(
        country => {
          this.countryData = country;
          console.log(this.countryData);
          this.show = true;
        },
        err => console.log("error",err),
        () => console.log("finally")
      )
}
  ngOnInit(): void {
  }

}
