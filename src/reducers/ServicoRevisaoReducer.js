import { GET_SERVICOS_REVISAO } from "../actions/types";

const initialState = {
    servicosRevisao: []
};

const servicoRevisaoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SERVICOS_REVISAO:
            return {
                ...state,
                servicosRevisao: action.payload
            };
        default:
            return state;
    }
}
export default servicoRevisaoReducer;
