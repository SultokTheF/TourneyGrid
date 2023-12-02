import { userEndpoints } from "./endpoints";
import User from "../types/User";
import axios from "axios";

export const userValidate = async (): Promise<User> => {
    try {
      const response = await axios.get(
        userEndpoints,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
            'Content-Type': 'application/json', // Set the appropriate content type
          },
        }
      );
  
      if( response.status == 200 ) {
        alert( 'Ваша завяка отправлена в обработку' );
        window.location.replace( '/' );
      } 
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };