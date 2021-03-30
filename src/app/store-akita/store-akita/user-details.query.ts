import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { StoreAkitaModule } from '../store-akita.module';
import { UserDetailsState, UserDetailsStore } from './user-details.store';

@Injectable({
    providedIn: StoreAkitaModule
})
export class UserDetailsQuery extends Query<UserDetailsState> {

    userDetails$ = this.select();

    constructor(protected userDetailsStore: UserDetailsStore) {
        super(userDetailsStore);
    }
}
