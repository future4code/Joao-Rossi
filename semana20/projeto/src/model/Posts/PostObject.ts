import {POST_TYPE} from "./Post"

export interface CreatePostDTO {
    photo: string;
    description: string;
    type: POST_TYPE;
    token: string
  }
  
  export interface PostRequestDTO {
    idPost: string;
    token: string;
  }
  
  
   export type authenticationData = {
      
  }
  