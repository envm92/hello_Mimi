import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: '<router-outlet fxFill></router-outlet>'
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
