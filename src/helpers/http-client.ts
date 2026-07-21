import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

function HttpClient() {
  return {
    get: axios.get,
    post: axios.post,
    patch: axios.patch,
    put: axios.put,
    delete: axios.delete,
  };
}

export default HttpClient();
