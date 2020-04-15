import { Component, OnInit } from '@angular/core';
import {
  faSmileWink,
  faGlobeAmericas,
  faLanguage
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-data-sheet',
  templateUrl: './data-sheet.component.html',
  styleUrls: ['./data-sheet.component.scss']
})
export class DataSheetComponent implements OnInit {

  icons = {
    smile: faSmileWink,
    americas: faGlobeAmericas,
    language: faLanguage
  };

  constructor() { }

  ngOnInit(): void {
  }

}
