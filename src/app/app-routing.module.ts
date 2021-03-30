import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateComponent } from './candidate/candidate.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'candidate'
  }, {
    path: 'candidate',
    loadChildren: () => import('./candidate/candidate.module').then(module => module.CandidateModule)
  }, {
    path: 'client',
    component: ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
