import { Action } from "@ngrx/store";

export enum CandidateDetailsActions {
    CHANGE_CANDIDATE_DETAILS = '[Candidate] CHANGE_CANDIDATE_DETAILS',
    CHANGE_SELECTED_LIST = '[Candidate] CHANGE_SELECTED_LIST'
}

export class ChangeCandidateDetails implements Action {
    readonly type = CandidateDetailsActions.CHANGE_CANDIDATE_DETAILS;
    constructor(public payload: any) { }
}

export type CandidateDetails = ChangeCandidateDetails;