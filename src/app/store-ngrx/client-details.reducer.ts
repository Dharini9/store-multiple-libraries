import { CandidateDetailsState, ClientDetailsState, initialcandidateDetailsState, initialClientDetailsState } from "./app.state";
import { CandidateDetails, CandidateDetailsActions } from "./candidate-details.action";
import { ClientDetails, ClientDetailsActions } from "./client-details.action";

export function ClientDetailsReducer(state = initialClientDetailsState, action: ClientDetails): ClientDetailsState {
    switch (action.type) {
        case ClientDetailsActions.CHANGE_CLIENT_DETAILS:
            {
                return {
                    ...state,
                    clientID: action.payload['clientID'],
                    clientName: action.payload['clientName']
                };
            }

        default: {
            return state;
        }
    }
}