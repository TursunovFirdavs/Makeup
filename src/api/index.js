import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://makeup-api.herokuapp.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    timeout: 10000
})

export default instance