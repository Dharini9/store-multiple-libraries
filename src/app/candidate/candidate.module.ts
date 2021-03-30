import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateComponent } from './candidate.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateRoutingModule } from './candidate-routing.module';



@NgModule({
  declarations: [CandidateComponent, CandidateDetailsComponent],
  imports: [
    CommonModule,
    CandidateRoutingModule
  ]
})
export class CandidateModule { }
