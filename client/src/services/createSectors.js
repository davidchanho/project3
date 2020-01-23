import http from "./httpService";
import { apiUrl } from "../config.json";
import axios from "axios";
export function createSectors() {
    const apiEndpoint = apiUrl + "/createSectors";
    let mainSectors = [
    { indexName: 'XBI', priceData: [], macdData: [], adxData: []},
    { indexName: 'QQQ', priceData: [], macdData: [], adxData: []},
    { indexName: 'FXI', priceData: [], macdData: [], adxData: []},
    { indexName: 'XLE', priceData: [], macdData: [], adxData: []},
    { indexName: 'SMH', priceData: [], macdData: [], adxData: []},
    { indexName: 'XLV', priceData: [], macdData: [], adxData: []},
    { indexName: 'IWM', priceData: [], macdData: [], adxData: []},
    { indexName: 'IWC', priceData: [], macdData: [], adxData: []},
    { indexName: 'IGV', priceData: [], macdData: [], adxData: []}
    ];
    return http.post(apiEndpoint, {mainSectors})
}