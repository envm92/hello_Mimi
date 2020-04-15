import { Component, OnInit } from '@angular/core';
import {
  faSmileWink,
  faGlobeAmericas,
  faLanguage,
  faStar,
  faUniversity
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
    language: faLanguage,
    start: faStar,
    university: faUniversity
  };

  constructor() { }

  ngOnInit(): void {
  }

}
