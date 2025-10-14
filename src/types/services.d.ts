export enum ResponseStatus {
    SUCCESS = 'success',
    ERROR = 'error'
  }
  
  declare global {
    type SuccessResponse<T> = {
      status: ResponseStatus
      message: string
      data: T
    }
    type ErrorResponse = {
      status: number
      data: SuccessResponse<T>
    }
  }
  
  export {}
  