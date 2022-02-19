import axios from "axios";
import { baseUrl } from "./SharedApi";

function getAllFonts() {
  return axios.get(`${baseUrl}/list`);
}

function getFont(name) {
  return axios.get(`${baseUrl}/fonts?font=${name}`);
}

export { getAllFonts, getFont };
