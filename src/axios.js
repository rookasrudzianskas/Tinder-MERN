import axios from "axios";

const instance = axios.create({
    baseURL: "https://rookas-tinder-mern-backend.herokuapp.com",
});

export default instance;