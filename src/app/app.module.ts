import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './components/ui/search-bar/search-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { AppComponent } from './app.component';
import { NewsCardComponent } from './components/news/news-card/news-card.component';
import { NewsContentComponent } from './components/news/news-content/news-content.component';
import { MainComponent } from './layout/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    NewsContentComponent,
    MainComponent,
    SearchBarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
