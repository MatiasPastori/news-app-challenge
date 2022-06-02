import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  storedTheme: string = 'light';
  root: any;


  constructor() { 
  }


  switchTheme(e: any) {
    document.body.classList.toggle('dark')
  }
  

  setTheme(theme: string): void{
    this.storedTheme = theme;
  }

  getTheme(): string{
    return this.storedTheme;
  }

}
