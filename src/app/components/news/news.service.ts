import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class NewsService {

  keywords!: string;

  constructor(private http: HttpClient) { }

  // We could be recieving keywords. By default we'll just set it to 'a' just to be able to get some random news at first.
  getAllNews(keywords = 'a'): Observable<any> {
    return this.http.get(environment.NEWS_API_URL + '/everything?' + `${keywords ? `q=${keywords}` : ''}` + '&apiKey=' + environment.NEWS_API_KEY);
  }

  // The headlines can be filtered with any of these options. 
  // TODO: Not supported yet, but in the future there will be an option in the header to allow the customized filter of headlines
  getTopHeadlines(countryCode?: string, category?: string, keywords?: string, sources?: string): Observable<any> {
    return this.http.get(environment.NEWS_API_URL + '/top-headlines?' + `${countryCode && !sources ? `country=${countryCode}` : ''}` + `${category && !sources ? `category=${category}` : ''}` + `${keywords ? `q=${keywords}` : ''}` + `{${sources && !countryCode && !category ? `sources=${sources}` : ''}}` + '?apiKey=' + environment.NEWS_API_KEY);

  }

  // Coma separated list of sources. 
  // TODO: Not supported yet. Enable an option in the header to be able to get and filter the top headline sources.
  getTopHeadlinesSources(countryCode?: string, category?: string): Observable<any> {
    return this.http.get(environment.NEWS_API_URL + '/top-headlines/sources?' + `${countryCode ? `country=${countryCode}` : ''}` + `${category ? `category=${category}` : ''}` + '?apiKey=' + environment.NEWS_API_KEY);
  }

}