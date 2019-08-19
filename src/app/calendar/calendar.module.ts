import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CalendarModule as cal, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    cal.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    SharedModule,
    FormsModule,
    NgbModalModule,
  ]
})
export class CalendarModule { }
