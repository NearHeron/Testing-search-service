import axios from "axios"
import  { BASE_URL } from "./config";

export const request = axios.create({
  baseURL: BASE_URL
});