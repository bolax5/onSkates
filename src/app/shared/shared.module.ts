import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CalendarModule } from 'angular-calendar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const MODULES = [
  CommonModule,
  TranslateModule,
  HttpClientModule,
  NgbModule,
  AngularFireDatabaseModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    HeaderComponent
  ]
})
export class SharedModule { }
