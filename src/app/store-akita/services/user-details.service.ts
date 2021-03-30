import { Injectable } from '@angular/core';
import { UserDetailsState, UserDetailsStore } from '../store-akita/user-details.store';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(
    private userDetailsStore: UserDetailsStore
  ) { }

  storeUserDetails(userDetail: UserDetailsState) {
    this.userDetailsStore.update(userDetail);
  }
}
