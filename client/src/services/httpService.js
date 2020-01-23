import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
    const expectedError = error.respons && error.response.status >= 500 && error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
    }

    return Promise.reject(error);
})

function setJwt(jwt) {
    //sets JWT from aut to avoid bi-directional 
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt

}