import {POST_TYPE} from "./Post"

export interface CreatePostDTO {
    photo: string;
    description: string;
    type: POST_TYPE;
    token: string
  }
  
  export interface LoginInputDTO {
    email: string;
    password: string;
  }
  
  
  export interface ResultPostBusiness {
    statusCode: number;
    resultMessage: string;
  }

  export type authenticationData = {
      
  }
  