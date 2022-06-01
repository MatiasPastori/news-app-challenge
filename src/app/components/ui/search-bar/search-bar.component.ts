import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  keywords!: string;

  @Output()
  keywordChangeEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onInputEvent(inputEvent: any ): void {
    // console.log(inputEvent)
    this.keywordChangeEvent.emit(inputEvent.target.value);
  }

}
