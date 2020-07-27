import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Observable } from "rxjs";
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items : any;
  searchText : string;
  // countryData : any;
  // content : string;

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

//    websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']
//
//    form = new FormGroup({
//      countrycode: new FormControl('', Validators.required)
//    });
//
//    get f(){
//      return this.form.controls;
//    }
//
//    submit(){
//      this.content = this.form.value;
//      console.log("hello there: ", this.form.value);
//      this.countryService.getCountryData(this.content).subscribe(
//        country => {
//          this.countryData = country;
//          console.log(this.countryData);
//        },
//        err => console.log("error",err),
//        () => console.log("finally")
//      )
//    }
//
//    changeWebsite(e) {
//   console.log(e.target.value);
// }

  ngOnInit(): void {
  }


}
