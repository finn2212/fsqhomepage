import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/pages/error/error.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { MainHomeComponent } from './components/pages/main-home/main-home.component';
import { ImpressumComponent } from './components/pages/Impressum/impressum.component';


const routes: Routes = [
  {
    path:'',component:MainHomeComponent 
  },
  {
    path:'contact-us',component:ContactComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'**',component:ErrorComponent
  },
  {
    path:'**',component:ImpressumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
