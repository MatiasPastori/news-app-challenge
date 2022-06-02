import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  showSearch = true;

  @Output()
  searchChangeEvent: EventEmitter<string> = new EventEmitter();

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  // TODO: Improve the way this is done... in order to keep the search-bar out of the communication with the main component so it can be reutilized.
  onSearchChange(searchInput: string){
    this.searchChangeEvent.emit(searchInput);
  }

  switchTheme(e: any){
    this.themeService.switchTheme(e.target.checked);
  }

}
