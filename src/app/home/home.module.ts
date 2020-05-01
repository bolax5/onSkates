import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { TeamComponent } from './team/team.component';
import { ModalityDetailComponent } from './modality-detail/modality-detail.component';
const COMPONENTS = [
  HomeComponent,
  TeamComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ModalityDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [...COMPONENTS],
  entryComponents: [
    ModalityDetailComponent
  ]
})
export class HomeModule { }
