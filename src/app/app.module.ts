import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { HeadSectionComponent } from './head-section/head-section.component';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';
import { CardsComponent } from './cards/cards.component';
import { CardItemComponent } from './card-item/card-item.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    HeadSectionComponent,
    WelcomeHomeComponent,
    CardsComponent,
    CardItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
