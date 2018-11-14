import axios from "axios"
import {
  AUTH_LOGIN,
  AUTH_CHECK,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_GET_PERMISSIONS,
} from "react-admin"

const authProvider = (type: string, params: any) => {
  let result: boolean = true
  let payload: object = {}
  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }
  switch (type) {
    case AUTH_LOGIN:
      return axios
        .post(
          "https://dev.paytravel-api.cronix.ms/api/admin/v1/login",
          {
            email: params.username,
            password: params.password,
          },
          options
        )
        .then((res: any) => {
          localStorage.setItem("token", res.data.token)
        })
        .catch((err: any) => {
          console.log("error", err)
        })
    case AUTH_CHECK:
      result = Boolean(localStorage.getItem("token"))
      break
    case AUTH_GET_PERMISSIONS:
      payload = { users: "admin", posts: "user" }
      break
    case AUTH_LOGOUT:
      localStorage.removeItem("token")
      break
    case AUTH_ERROR:
      localStorage.removeItem("token")
      result = false
      break
    default:
      result = false
  }
  return result ? Promise.resolve(payload) : Promise.reject()
}

export default authProvider
