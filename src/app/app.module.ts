import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftmidComponent } from './leftmid/leftmid.component';
import { RightmidComponent } from './rightmid/rightmid.component';
import { IntroComponent } from './intro/intro.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CardsectionComponent } from './cardsection/cardsection.component';
import { ChartsComponent } from './charts/charts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftmidComponent,
    RightmidComponent,
    IntroComponent,
    FeedbackComponent,
    HomeComponent,
    NavbarComponent,
    CardComponent,
    CardsectionComponent,
    ChartsComponent,
    NavComponent,
    SidebarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
