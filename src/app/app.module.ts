import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelpComponent } from './help/help.component';
import { ClubCreateComponent } from './club-create/club-create.component';
import { ClubListComponent } from './club-list/club-list.component';
import { MatchListComponent } from './match-list/match-list.component';
import { MatchCreateComponent } from './match-create/match-create.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FooterComponent } from './footer/footer.component';
import { MatchResultComponent } from './match-result/match-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelpComponent,
    ClubCreateComponent,
    ClubListComponent,
    MatchListComponent,
    MatchCreateComponent,
    SearchResultComponent,
    FooterComponent,
    MatchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
