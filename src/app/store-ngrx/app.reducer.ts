import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./app.state";
import { CandidateDetailsReducer } from "./candidate-details.reducer";
import { ClientDetailsReducer } from "./client-details.reducer";

export const AppReducer: ActionReducerMap<AppState> = {
    candidateDetails: CandidateDetailsReducer,
    clientDetails: ClientDetailsReducer
};