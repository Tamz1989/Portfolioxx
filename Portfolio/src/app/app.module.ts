import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgComponent } from './components/logo-arg/logo-arg.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaComponent } from './components/acerca/acerca.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgComponent,
    SocialComponent,
    BannerComponent,
    AcercaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
