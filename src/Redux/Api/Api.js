import Axios from "axios";

const api = Axios.create({
  // baseURL: "http://localhost:3499/api/",
  baseURL: "https://hotel-booking-node.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      console.log(err.response);
    }
    return Promise.reject(err);
  }
);

export default api;
