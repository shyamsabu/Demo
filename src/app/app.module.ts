import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderMenuComponent } from './top-header-menu/top-header-menu.component';
import { CarPartsComponent } from './car-parts/car-parts.component';
import { PartsComponent } from './parts/parts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderMenuComponent,
    CarPartsComponent,
    PartsComponent,
    ContactUsComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
