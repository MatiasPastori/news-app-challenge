import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsContentComponent } from './components/news/news-content/news-content.component';
import { MainComponent } from './layout/main/main.component';

const routes: Routes = [
  { path: 'news', component: MainComponent, data:{animation: 'NewsPage'} },
  { path: 'news-content', component: NewsContentComponent, data:{animation: 'NewsContentPage'} },
  { path: '**', component: MainComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }