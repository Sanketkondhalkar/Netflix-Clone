const URL = "http://localhost:4000/api/v1/auth";
import axios from "axios";

export const registerApi = async (value) => {
  console.log(value);
  const data = await axios.post(`${URL}/register`, value);
  return data.data;
};

export const loginApi = async (value) => {
  const data = await axios.post(`${URL}/login`, value);
  return data.data;
};
