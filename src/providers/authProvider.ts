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
  switch (type) {
    case AUTH_LOGIN:
      const { username, password } = params
      if (username === "admin" && password === "admin") {
        localStorage.setItem("token", "blablabla")
      } else result = false
      break
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
