import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {

  countryData;
  constructor(private countryService : CountryService) {
  }
  OnInput(value) {
  // this.serverName = value;
  // console.log(this.serverName);
  this.countryService.getCapital(value).subscribe(
        country => {
          this.countryData = country;
          console.log(this.countryData);
          
          // console.log(this.countryData.name);
        },
        err => console.log("error",err),
        () => console.log("finally")
      )
  }
  ngOnInit(): void {
  }

}
