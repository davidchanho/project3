import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/user";

export function register(user) {
    return http.post(apiEndpoint, {
        email: user.email,
        password: user.password,
        name: "TestUser",
        userSettings: {
            fastSMA: 10,
            slowSMA: 40,
            fastWeight: 15,
            slowWeight: 15,
            fastToSlowWeight: 15,
            MACDWeight: 15,
            ADXWeight: 40
        }
    })
}