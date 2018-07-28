import { Component, OnInit } from '@angular/core';
//importing route related code
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private router:Router) { 
    console.log("Home Constructor is called");
  }

  ngOnInit() {
  }

}
