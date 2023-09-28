import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainModule} from './components/main/main.module';
import {BusinessNewsComponent} from './pages/business-news/business-news.component';
import {EntertainmentNewsComponent} from './pages/entertainment-news/entertainment-news.component';
import {GeneralNewsComponent} from './pages/general-news/general-news.component';
import {HealthNewsComponent} from './pages/health-news/health-news.component';
import {ScienceNewsComponent} from './pages/science-news/science-news.component';
import {SportsNewsComponent} from './pages/sports-news/sports-news.component';
import {TechnologyNewsComponent} from './pages/technology-news/technology-news.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, BusinessNewsComponent, EntertainmentNewsComponent, GeneralNewsComponent, HealthNewsComponent, ScienceNewsComponent, SportsNewsComponent, TechnologyNewsComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
