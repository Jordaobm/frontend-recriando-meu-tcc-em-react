import axios from 'axios';

const apiprevmet3 = axios.create({
    baseURL: 'https://apiprevmet3.inmet.gov.br/'
})

export default apiprevmet3;