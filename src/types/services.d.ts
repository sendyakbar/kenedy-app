export enum ResponseStatus {
    SUCCESS = 'success',
    ERROR = 'error'
  }
  
  declare global {
    type SuccessResponse = {
      status: ResponseStatus
      message: string
    }
    type ErrorResponse = {
      status: ResponseStatus
      data: any
    }
  }
  
  export {}
  