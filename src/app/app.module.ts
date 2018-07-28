import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import {RouterModule,Routes} from '@angular/router';
import { ViewdataService } from './viewdata.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CountryviewComponent } from './countryview/countryview.component';
import { CurrencyviewComponent } from './currencyview/currencyview.component';
import { LanguageviewComponent } from './languageview/languageview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    CountryviewComponent,
    CurrencyviewComponent,
    LanguageviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'view',component:ViewComponent},
      {path:'countryview/:countryname',component:CountryviewComponent},
      {path:'currencyview/:currencycode',component:CurrencyviewComponent},
      {path:'languageview/:languagecode',component:LanguageviewComponent}
    ])

  ],
  providers: [ViewdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
