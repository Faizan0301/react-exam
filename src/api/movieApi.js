import axios from "axios";

const apiInstance = axios.create({
    baseURL: "https://www.omdbapi.com/?s=Avengers&apikey=4842f5e4"
})

export default apiInstance;    