import {
    AxiosError,
    AxiosRequestConfig,
} from 'axios'

import axiosInstance from './axiosInstance'

export const fetcher = async<
    Result = unknown,
    Args extends AxiosRequestConfig = AxiosRequestConfig
>(args: Args): Promise<Result> => {
    try {
        const { headers } = args
        const result = await axiosInstance({
            ...args,
            headers,
        })
        return result.data
    } catch (error) {
        const err = error as AxiosError
        throw {
            status: err.response?.status,
            data: err.response?.data
        }
    }
}
  