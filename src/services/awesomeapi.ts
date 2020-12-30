import axios from 'axios';

const awesomeapi = axios.create({
    baseURL:'https://economia.awesomeapi.com.br/'
})

export default awesomeapi;