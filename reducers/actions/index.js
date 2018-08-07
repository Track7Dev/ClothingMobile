export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const UPDATE = "UPDATE";

export const Login = () => {
  return {
    type: LOGIN
  }
}

export const Logout = () => {
  return {
    type: LOGOUT
  }
} 

export const Update = (status) => {
  return {
    type: UPDATE,
    payload: status
  }
}

