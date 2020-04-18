import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: '<router-outlet fxFill></router-outlet>'
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('🌸%c Hello world! I\'m Eri 👩‍💻, thanks for inspecting my code 🌸', 'background: #222; color: #e91e63');
  }

}
