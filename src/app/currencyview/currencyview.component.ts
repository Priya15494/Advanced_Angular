import { Component, OnInit,OnDestroy } from '@angular/core';

//importing route related code
import {ActivatedRoute, Router} from "@angular/router";
import { ViewdataService } from '../viewdata.service';
import {Location} from '@angular/common';

import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-currencyview',
  templateUrl: './currencyview.component.html',
  styleUrls: ['./currencyview.component.css']
})
export class CurrencyviewComponent implements OnInit {
  public currencycode;
  public curr_country_details;
  constructor(private _route:ActivatedRoute,private router:Router, public viewdataService : ViewdataService) { 
    console.log("Countryview Constructor is called");
  }

  ngOnInit() {
    console.log("CurrencyView ngOnInit called");
     this.currencycode=this._route.snapshot.paramMap.get('currencycode');
     
     this.viewdataService.getCountriesOnCurrency(this.currencycode).subscribe (
       data => {
           this.curr_country_details=data;
           console.log(this.curr_country_details+"Currency countryDetails");
       },
       error => {
         console.log(error.errorMessage);
       }
     )

  }

}
