import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserDetailsService } from '../store-akita/services/user-details.service';
import { AppState } from '../store-ngrx/app.state';
import { ChangeCandidateDetails } from '../store-ngrx/candidate-details.action';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit(): void {
  }

  updateCandidateName($event) {
    if ($event && $event.target && $event.target.value.trim()) {
      this.changeCandidateName($event.target.value);
    }
  }

  changeCandidateName(candidateName) {
    this.store.dispatch(new ChangeCandidateDetails({candidateID: 1, candidateName: candidateName}));
    this.userDetailsService.storeUserDetails({username: candidateName, userID: 1});
  }

}
