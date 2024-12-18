//searching library : AXIOS

import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/e-clone-9ab24/us-central1/api' //the API clould function URL
});

export default instance;