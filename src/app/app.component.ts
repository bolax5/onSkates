import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FaIconService } from '@fortawesome/angular-fontawesome';


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
    // library .addIconPacks(fas, far, fab);

  }

}
