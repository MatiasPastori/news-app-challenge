import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class NewsService {

  keywords!: string;

  constructor(private http: HttpClient) { }

  getAllNews(keywords = 'a'): Observable<any> {
    return this.http.get(environment.NEWS_API_URL + '/everything?' + `${keywords ? `q=${keywords}` : ''}` + '&apiKey=' + environment.NEWS_API_KEY);
  }

  getTopHeadlines(countryCode?: string, category?: string, keywords?: string, sources?: string): Observable<any> {
    return this.http.get(environment.NEWS_API_URL + '/top-headlines?' + `${countryCode && !sources ? `country=${countryCode}` : ''}` + `${category && !sources ? `category=${category}` : ''}` + `${keywords ? `q=${keywords}` : ''}` + `{${sources && !countryCode && !category ? `sources=${sources}` : ''}}` + '?apiKey=' + environment.NEWS_API_KEY);

  }

  // Coma separated list of sources
  getTopHeadlinesSources(countryCode?: string, category?: string): Observable<any> {
    return this.http.get(environment.NEWS_API_URL + '/top-headlines/sources?' + `${countryCode ? `country=${countryCode}` : ''}` + `${category ? `category=${category}` : ''}` + '?apiKey=' + environment.NEWS_API_KEY);
  }

}