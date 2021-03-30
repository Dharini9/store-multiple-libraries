import { Action } from "@ngrx/store";

export enum ClientDetailsActions {
    CHANGE_CLIENT_DETAILS = '[Client] CHANGE_CLIENT_DETAILS',
    CHANGE_SELECTED_LIST = '[Client] CHANGE_SELECTED_LIST'
}

export class ChangeClientDetails implements Action {
    readonly type = ClientDetailsActions.CHANGE_CLIENT_DETAILS;
    constructor(public payload: any) { }
}

export type ClientDetails = ChangeClientDetails;