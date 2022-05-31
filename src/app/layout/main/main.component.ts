import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/components/news/news.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  news!: Observable<any>;


  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.news = this.newsService.getAllNews();

  }

}
