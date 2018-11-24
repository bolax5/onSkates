import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    TranslateModule,
    NgbModule,
    HeaderComponent
  ]
})
export class SharedModule { }
