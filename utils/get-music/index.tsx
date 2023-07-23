import axios from "axios";
function getMusic<T>(url: string) {
  return axios<T>(url);
}

export default getMusic;
