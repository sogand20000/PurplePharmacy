import axios from "axios";
const api=axios.create({
    baseURL:'http://192.168.43.91:3010/'
})
api.interceptors.request.use(function (config) {
    
    return config;
  })
  
  export default api;