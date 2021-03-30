import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDetailsQuery } from 'src/app/store-akita/store-akita/user-details.query';
import { UserDetailsState } from 'src/app/store-akita/store-akita/user-details.store';
import { AppState, CandidateDetailsState } from 'src/app/store-ngrx/app.state';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {

  candidateDetails: CandidateDetailsState;
  userDetails: UserDetailsState;

  constructor(
    private store: Store<AppState>,
    private userDetailsQuery: UserDetailsQuery
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.candidateDetails).subscribe(candidateDetails => {
      this.candidateDetails = candidateDetails;
    });

    this.userDetailsQuery.userDetails$.subscribe(userDetails => {
      this.userDetails = userDetails;
    });
  }

}
