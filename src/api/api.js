import axios from "axios";

export const client = axios.create(
    {
        baseURL: "https://jsonplaceholder.typicode.com/"
    }
)

// const instance = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });