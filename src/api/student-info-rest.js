import axios from "axios";
import qs from "qs";

const baseURL = "http://localhost:8080/rest";
const auth = {
  username: "admin",
  password: "pwd"
};
const contentType = "application/x-www-form-urlencoded";

const getAxiosInstance = () => {
  return axios.create({
    baseURL,
    auth
  });
};

export const getStudentsByCriteria = (url, data) => {
  const instance = getAxiosInstance();
  data = qs.stringify(data);
  return instance.post(url, data, {
    headers: {
      "Content-Type": contentType
    }
  });
};
