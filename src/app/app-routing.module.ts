import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubCreateComponent } from './club-create/club-create.component';
import { ClubListComponent } from './club-list/club-list.component';
import { HelpComponent } from './help/help.component';
import { MatchCreateComponent } from './match-create/match-create.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchResultComponent } from './match-result/match-result.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  {path : "",pathMatch: "full",redirectTo: "/home"},
  {path : "home",component: ClubListComponent},
  {path : "enroll-club",component: ClubCreateComponent},
  {path : "enroll-match",component: MatchCreateComponent},
  {path : "match-list",component: MatchListComponent},
  {path : "help-app",component: HelpComponent},
  {path : "match-result",component: MatchResultComponent},
  {path : "search-result",component: SearchResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
