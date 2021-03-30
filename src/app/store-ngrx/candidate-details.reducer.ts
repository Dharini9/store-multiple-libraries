import { CandidateDetailsState, initialcandidateDetailsState } from "./app.state";
import { CandidateDetails, CandidateDetailsActions } from "./candidate-details.action";

export function CandidateDetailsReducer(state = initialcandidateDetailsState, action: CandidateDetails): CandidateDetailsState {
    switch (action.type) {
        case CandidateDetailsActions.CHANGE_CANDIDATE_DETAILS:
            {
                return {
                    ...state,
                    candidateID: action.payload['candidateID'],
                    candidateName: action.payload['candidateName']
                };
            }

        default: {
            return state;
        }
    }
}