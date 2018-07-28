
import { Component, OnInit,OnDestroy } from '@angular/core';

//importing route related code
import {ActivatedRoute, Router} from "@angular/router";
import { ViewdataService } from '../viewdata.service';
import {Location} from '@angular/common';

import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-countryview',
  templateUrl: './countryview.component.html',
  styleUrls: ['./countryview.component.css']
})
export class CountryviewComponent implements OnInit {
  public countryName;
  public countrydetails;
  constructor(private _route:ActivatedRoute,private router:Router, public viewdataService : ViewdataService) { 
    console.log("Countryview Constructor is called");
  }

  ngOnInit() {
    console.log("Countryview ngOnInit called");
   this.countryName=this._route.snapshot.paramMap.get('countryname');

    this.viewdataService.getSingleCountryInformation(this.countryName).subscribe (
      data => {
          this.countrydetails=data;
          console.log(this.countrydetails);
      },
      error => {
        console.log(error.errorMessage);
      }
    )

}
}