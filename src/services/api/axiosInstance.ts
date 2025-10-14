import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://103.127.135.62:8989'
})

export default axiosInstance
