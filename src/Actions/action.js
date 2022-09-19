import axios from "axios";
import {
  GET_USERS
} from "./index"

export function getUsers() {
    return async function (dispatch) {
      const allUser = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(allUser)
      dispatch({
        type:   GET_USERS,
        payload: allUser.data,
      })
  
    }
  }