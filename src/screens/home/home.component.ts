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
      title: $localize`:@@languagesLabel:Languages`,
      icon: faCode,
      list: [
        { label: 'JavaScript', color: 'primary' },
        { label: 'Dart', color: 'warn' },
        { label: 'TypeScript', color: 'accent' },
        { label: 'HTML/CSS', color: '' }
      ]
    } , {
      title: $localize`:@@toolsLabel:Tools`,
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
    title: $localize`:@@skillsLabel:Skills`,
    icon: faCubes,
    list: [
      { label: $localize`:@@creativeChip:Creative`, color: 'primary' },
      { label: $localize`:@@teamPlayerChip:Team player`, color: 'warn' },
      { label: $localize`:@@problemSolverChip:Problem-solver`, color: 'accent' },
      { label: $localize`:@@leadChip:Lead`, color: '' },
      { label: $localize`:@@agileChip:Agile Practices`, color: '' }
    ]
  }];
  constructor() {}
  ngOnInit(): void {}

}
