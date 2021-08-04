import axios from "axios";
import { GET_SERVICOS_REVISAO } from "../actions/types";

const getServicosRevisao = () => async dispatch => {
    const res = await axios.get("/revisao");
    dispatch({
        type: GET_SERVICOS_REVISAO,
        payload: res.data
    });
};
export default getServicosRevisao;
