import { Component, OnInit,OnDestroy } from '@angular/core';

//importing route related code
import {ActivatedRoute, Router} from "@angular/router";
import { ViewdataService } from '../viewdata.service';
import {Location} from '@angular/common';

import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public countriesofRegion;
  public region;
  constructor(private _route:ActivatedRoute,private router:Router, public viewdataService : ViewdataService) { 
    console.log("View Constructor is called");
  }
  ngOnDestroy() {
    console.log("OnDestroy implemented in View");
  } 
  ngOnInit() {
    console.log("view ngOnInit called");
    this._route.queryParams.subscribe(params => {
          console.log(params); // {region: "country"}
            this.region = params.region;
          console.log(this.region); // country
    });
     
    this.viewdataService.getSingleRegionInformation(this.region).subscribe (
      data => {
          this.countriesofRegion=data;
          console.log(this.countriesofRegion);
      },
      error => {
        console.log(error.errorMessage);
      }
    )

  }
}
