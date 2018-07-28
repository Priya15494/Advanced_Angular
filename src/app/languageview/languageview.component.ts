import { Component, OnInit,OnDestroy } from '@angular/core';

//importing route related code
import {ActivatedRoute, Router} from "@angular/router";
import { ViewdataService } from '../viewdata.service';
import {Location} from '@angular/common';

import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-languageview',
  templateUrl: './languageview.component.html',
  styleUrls: ['./languageview.component.css']
})
export class LanguageviewComponent implements OnInit {
  public languagecode;
  public lang_country_details;
  constructor(private _route:ActivatedRoute,private router:Router, public viewdataService : ViewdataService) { 
    console.log("Language Constructor is called");
  }

  ngOnInit() {
    console.log("Languageview ngOnInit called");
    this.languagecode=this._route.snapshot.paramMap.get('languagecode');
    console.log("Languagecode"+this.languagecode);
    this.viewdataService.getCountriesOnLanguage(this.languagecode).subscribe (
      data => {
          this.lang_country_details=data;
          console.log(this.lang_country_details+"Language countryDetails");
      },
      error => {
        console.log(error.errorMessage);
      }
    )
  }

}
