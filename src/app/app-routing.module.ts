import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [
  {
    path: 'countryList', 
    canActivate: [VigilanteGuard],
    component: CountryListComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
