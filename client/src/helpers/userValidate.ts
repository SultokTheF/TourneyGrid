import { userValidateEndpoint} from "./endpoints";
import User from "../types/User";
import axios from "axios";

const userValidate = async (): Promise<User> => {
  try {
    const response = await axios.get(
      userValidateEndpoint,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem( 'token' )}`,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export default userValidate;