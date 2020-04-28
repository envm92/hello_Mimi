import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { faCode, faTools, faCubes, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { faGithub  } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  supportedLanguages = ['en', 'es'];

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
  constructor(
    private router: Router,
    @Inject(LOCALE_ID) protected localeId: string,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    let userLang = navigator.language || navigator['userLanguage'];
    userLang = userLang.substring(0, 2);
    if (
      (this.supportedLanguages.indexOf(userLang) > -1)
      &&
      (this.localeId != userLang)
    ) {
      const snackBarRef = this.snackBar.open($localize`:@@localeSnackBar:¿Quieres visitar el sitio web en español?`, 'Ok', {
        duration: 30000,
      });
      snackBarRef.onAction().subscribe(() => {
        window.location.href = `/${userLang}`;
      });
    }
  }

}
