import axios from "axios";
let mainUrl="https://wtsacademy.dedicateddevelopers.us/api";

export const baseURL=mainUrl;
let apiInstance=axios.create({baseURL,});
export default apiInstance;
apiInstance.interceptors.request.use(
    async function (config) {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      if (token !== null || token !== undefined) {
        config.headers["x-access-token"] = token;
      }
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );
  export const product = (media) => {
    return (
      `https://wtsacademy.dedicateddevelopers.us/uploads/product/${media}`
    );
  };
  
  export const profile_pic = (media) => {
    return (
      `https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${media}`
    );
  };
