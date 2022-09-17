import axios from "axios";

const URL = 'http://localhost:8080/api/'

export const Fondos = async () => {
  return await axios.get(`${URL}listarFondos`);
}