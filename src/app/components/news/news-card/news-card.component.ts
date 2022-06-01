import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../model/news.interface';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input()
  article!: Article;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToNewsContent(): void {
    // I know this might seem redundant, queryParams is not intended to provide a mechanism to 
    // look up for deep o strutured data such as the 
    // field "source" of the article which is an object itself
    
    let article = {
      ...this.article,
      source: this.article.source.name
    }
    this.router.navigate(['/news-content'], { queryParams: { ...article} })
  }

}
