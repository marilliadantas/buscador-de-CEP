import axios from "axios";


//ws/62680000/json/


const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api; 