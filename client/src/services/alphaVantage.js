import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/alphavantage";

export function addVantageData(data) {
    return http.post(apiEndpoint, {data})
}