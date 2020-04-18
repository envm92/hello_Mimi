import { Component, OnInit } from '@angular/core';
import { faCode, faTools, faCubes, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  icons = {
    gitHub: faGithub,
    language: faLanguage
  };
  sections = [
    {
      title: 'Languages',
      icon: faCode,
      list: [
        { label: 'JavaScript', color: 'primary' },
        { label: 'Dart', color: 'warn' },
        { label: 'TypeScript', color: 'accent' },
        { label: 'HTML/CSS', color: '' }
      ]
    } , {
      title: 'Tools',
      icon: faTools,
      list: [
        { label: 'Flutter', color: 'primary' },
        { label: 'Firebase', color: 'primary' },
        { label: 'Angular 9', color: 'warn' },
        { label: 'Docker', color: 'accent' },
        { label: 'Node.js', color: '' },
        { label: 'Git', color: '' },
        { label: 'Jira', color: '' },
        { label: 'Sketch', color: '' },
      ]
    } , {
    title: 'Skills',
    icon: faCubes,
    list: [
      { label: 'Creative', color: 'primary' },
      { label: 'Team player', color: 'warn' },
      { label: 'Problem-solver', color: 'accent' },
      { label: 'Lead', color: '' },
      { label: 'Agile Practices', color: '' }
    ]
  }];
  constructor() {}
  ngOnInit(): void {}

}
