import { Store, StoreConfig } from '@datorama/akita';

export interface UserDetailsState {
    username: string;
    userID: number;
}

export function createGridInitialState(): UserDetailsState {
    return {
        username: '',
        userID: 0
    };
}

@StoreConfig({ name: 'user-details' })
export class UserDetailsStore extends Store<UserDetailsState> {
    constructor() {
        super(createGridInitialState());
    }
}