import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficalComponent } from './grafical/grafical.component';

const routes: Routes = [

    { path: 'dashboard', 
      component: PagesComponent,
      children: [
                    { path: '', component: DashboardComponent },
                    { path: 'progress', component: ProgressComponent },
                    { path: 'grafical', component: GraficalComponent },
                    // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
                ]

    },
    
];
  
  @NgModule({
    imports: [RouterModule.forChild( routes )],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }
  