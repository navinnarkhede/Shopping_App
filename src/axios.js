import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/shopping-app-35a45/us-central1/api'
    // "//http://localhost:5001/shopping-app-35a45/us-central1/api",
});

export default instance;


