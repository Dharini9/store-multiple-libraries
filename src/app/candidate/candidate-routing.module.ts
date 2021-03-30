import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateComponent } from './candidate.component';

const routes: Routes = [
    {
        path: '',
        component: CandidateComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'candidate-details' },
            { path: 'candidate-details', component: CandidateDetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CandidateRoutingModule { }
