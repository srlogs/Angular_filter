import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items : any;
  searchText : string;
  constructor(private countryService : CountryService) {
    this.countryService.getAllCountry().subscribe(
      data => {
        this.items = data;
        console.log(this.items);
      },
      err => console.log("error",err),
      () => console.log("finally")
    )
   }

  ngOnInit(): void {
  }

}
