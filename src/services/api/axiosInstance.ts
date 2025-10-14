import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://kenedy.co.id'
})

export default axiosInstance
