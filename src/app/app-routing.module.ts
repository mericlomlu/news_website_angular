import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BusinessNewsComponent} from "./pages/business-news/business-news.component";
import {MainComponent} from "./components/main/main.component";
import {EntertainmentNewsComponent} from "./pages/entertainment-news/entertainment-news.component";
import {GeneralNewsComponent} from "./pages/general-news/general-news.component";
import {HealthNewsComponent} from "./pages/health-news/health-news.component";
import {ScienceNewsComponent} from "./pages/science-news/science-news.component";
import {SportsNewsComponent} from "./pages/sports-news/sports-news.component";
import {TechnologyNewsComponent} from "./pages/technology-news/technology-news.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path: 'business', component: BusinessNewsComponent},
  {path: 'entertainment', component: EntertainmentNewsComponent},
  {path: 'general', component: GeneralNewsComponent},
  {path: 'health', component: HealthNewsComponent},
  {path: 'science', component: ScienceNewsComponent},
  {path: 'sports', component: SportsNewsComponent},
  {path: 'technology', component: TechnologyNewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
