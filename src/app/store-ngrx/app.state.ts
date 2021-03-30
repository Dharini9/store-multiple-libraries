export interface CandidateDetailsState {
    candidateID: number;
    candidateName: string;
}

export interface ClientDetailsState {
    clientID: number;
    clientName: string;
}

export const initialcandidateDetailsState: CandidateDetailsState = {
    candidateID: 0,
    candidateName: ''
};

export const initialClientDetailsState: ClientDetailsState = {
    clientID: 0,
    clientName: ''
};

export interface AppState {
    candidateDetails: CandidateDetailsState;
    clientDetails: ClientDetailsState;
}

export const initialAppState: AppState = {
    candidateDetails: initialcandidateDetailsState,
    clientDetails: initialClientDetailsState
};

export function getInitialAppState() {
    return initialAppState;
}