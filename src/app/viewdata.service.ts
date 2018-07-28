import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, forkJoin } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ViewdataService {
  public regionData="https://restcountries.eu/rest/v2/region/";
  public countryData="https://restcountries.eu/rest/v2/name/";
  public currencyData="https://restcountries.eu/rest/v2/currency/";
  public languageData="https://restcountries.eu/rest/v2/lang/";
  public fetchRegion;
  public fetchCountryDetail;
  public fetchCountryOnCur;
  public fetchCountryOnLang;
  constructor(private _http:HttpClient) { 
    console.log("service constructor is called");
  }
  
  //ExceptionHandler
  private handleError(err:HttpErrorResponse){
    console.log("Handle error Http calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }
  
   //method to get details of region
 public getSingleRegionInformation(region):any{
  let fetchRegion=this.regionData+region;
  console.log(fetchRegion+"FETCH");
  let details=this._http.get(fetchRegion);
  console.log(details+"Details");
  return details;
}

public getSingleCountryInformation(countryName):any{
  let fetchCountryDetail=this.countryData+countryName+"?fullText=true";
  let countryDetails=this._http.get(fetchCountryDetail);
  console.log(countryDetails);
  return countryDetails;
}

public getCountriesOnCurrency(currencycode):any{
  let fetchCountryOnCur=this.currencyData+currencycode;
  console.log("FetchCountry on Currency"+fetchCountryOnCur);
  let currencyCountryDetails=this._http.get(fetchCountryOnCur);
  console.log(currencyCountryDetails);
  return currencyCountryDetails;
}

public getCountriesOnLanguage(languagecode):any{
  let fetchCountryOnLang=this.languageData+languagecode;
  console.log("FetchCountry on Language"+fetchCountryOnLang);
  let languageCountryDetails=this._http.get(fetchCountryOnLang);
  console.log(languageCountryDetails+"Language");
  return languageCountryDetails;
}
}
