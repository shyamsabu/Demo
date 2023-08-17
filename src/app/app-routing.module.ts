import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartsComponent } from './parts/parts.component';
import { CarPartsComponent } from './car-parts/car-parts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeContentComponent } from './home-content/home-content.component';

const routes: Routes = [
  { path: '', component: HomeContentComponent },
  { path: 'part', component: PartsComponent },
  { path: 'car-parts', component: CarPartsComponent },
  { path: 'contact-us', component: ContactUsComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
