import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { MainHomeComponent } from './components/pages/main-home/main-home.component';
import { ImpressumComponent } from './components/pages/Impressum/impressum.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { WebdesignComponent } from './components/pages/webdesign/webdesign.component';
import { EcommerceComponent } from './components/pages/ecommerce/ecommerce.component';
import { SoftwaresolutionsComponent } from './components/pages/softwaresolutions/softwaresolutions.component';
import { SocialmediaComponent } from './components/pages/socialmedia/socialmedia.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ErrorComponent,
    FaqComponent,
    ServicesComponent,
    MainHomeComponent,
    ImpressumComponent,
    WebdesignComponent,
    EcommerceComponent,
    SoftwaresolutionsComponent,
    SocialmediaComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonToggleModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, { provide: LOCALE_ID, useValue: window.navigator.language },],
  bootstrap: [AppComponent]
})
export class AppModule { }
