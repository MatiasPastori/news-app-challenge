import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {

  article$!: Observable<any>;


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.article$ = this.route.queryParams;
  }

}
