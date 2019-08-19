import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';
import { TeamComponent } from './home/team/team.component';
import { MireiaComponent } from './home/team/mireia/mireia.component';
import { MiriamComponent } from './home/team/miriam/miriam.component';
import { SaraComponent } from './home/team/sara/sara.component';
import { CristianComponent } from './home/team/cristian/cristian.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'team',
    component: TeamComponent,
    children: [
      {
        path: 'mireia',
        component: MireiaComponent
      },
      {
        path: 'miriam',
        component: MiriamComponent
      },
      {
        path: 'sara',
        component: SaraComponent
      },
      {
        path: 'cristiam',
        component: CristianComponent
      }
    ]
  },
  {
    path: 'join',
    component: JoinComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
