import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbModule,
  NgbDatepickerModule
} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CalendarModule } from 'angular-calendar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS, MatRippleModule } from '@angular/material/core';
import { AppDateAdapter, APP_DATE_FORMATS } from '../core/utils/date-parser';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from '@angular/material';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './components/footer/footer.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';


const MODULES = [
  CommonModule,
  TranslateModule,
  HttpClientModule,
  NgbModule,
  AngularFireDatabaseModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NgbModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  A11yModule,
  CdkStepperModule,
  CdkTableModule,
  CdkTreeModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  PortalModule,
  ScrollingModule,
  AgmCoreModule,
];
@NgModule({
  declarations: [HeaderComponent, FooterComponent, FloatingButtonComponent],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    HeaderComponent,
    FooterComponent,
    FloatingButtonComponent
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: APP_DATE_FORMATS
    }
  ]
})
export class SharedModule { }
