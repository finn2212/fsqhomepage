import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/pages/error/error.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { MainHomeComponent } from './components/pages/main-home/main-home.component';
import { WebdesignComponent } from './components/pages/webdesign/webdesign.component';
import { EcommerceComponent } from './components/pages/ecommerce/ecommerce.component';
import { SoftwaresolutionsComponent } from './components/pages/softwaresolutions/softwaresolutions.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { ImpressumComponent } from './components/pages/Impressum/impressum.component';
import { SocialmediaComponent } from './components/pages/socialmedia/socialmedia.component';



const routes: Routes = [
  {
    path:'',component:MainHomeComponent 
  },
  {
    path:'contact-us',component:ContactComponent
  },
  {
    path:'webdesign',component:WebdesignComponent
  },
  {
    path:'ecommerce',component:EcommerceComponent
  },
  {
    path:'softwaresolutions',component:SoftwaresolutionsComponent
  },
  {
    path:'socialmedia',component:SocialmediaComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'about-us',component:AboutusComponent
  },
  {
    path:'impressum',component:ImpressumComponent
  },
  {
    path:'**',component:ErrorComponent
  },
  {
    path:'**',component:ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
