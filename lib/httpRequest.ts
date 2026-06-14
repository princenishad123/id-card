import axios from "axios";

export const httpRequest = axios.create({
    baseURL:"http://api.apnasquad.site",
    withCredentials:true
})