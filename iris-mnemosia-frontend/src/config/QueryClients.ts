import axios from "axios";

export const mnemosiaApi = axios.create({
    baseURL: import.meta.env.VITE_MNEMOSIA_API_URL,
    timeout: 5000,
    timeoutErrorMessage: "Request timeout"
})