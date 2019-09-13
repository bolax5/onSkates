import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare const Particles;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'onSkates';
  constructor(translateService: TranslateService) {
    translateService.setDefaultLang('es');
    translateService.use('es');
  }

}
