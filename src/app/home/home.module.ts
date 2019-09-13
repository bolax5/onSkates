import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { MireiaComponent } from './team/mireia/mireia.component';
import { MiriamComponent } from './team/miriam/miriam.component';
import { CristianComponent } from './team/cristian/cristian.component';
import { SaraComponent } from './team/sara/sara.component';
import { ModalityDetailComponent } from './modality-detail/modality-detail.component';
const COMPONENTS = [
  HomeComponent,
  AboutComponent,
  TeamComponent,
  ContactComponent,
  MireiaComponent,
  MiriamComponent,
  CristianComponent,
  SaraComponent
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
