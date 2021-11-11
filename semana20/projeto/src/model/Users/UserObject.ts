import {USER_ROLES} from "./User"

export interface SignupInputDTO {
    name: string;
    email: string;
    password: string;
    role: USER_ROLES;
  }
  
  export interface LoginInputDTO {
    email: string;
    password: string;
  }
  
  
  export interface ResultUserBusiness {
    statusCode: number;
    resultMessage: string;
  }

  export type authenticationData = {
      
  }
  