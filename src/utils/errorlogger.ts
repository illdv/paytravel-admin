import Raven from "raven-js"

const dev = process.env.NODE_ENV !== "production"
export const url = process.env.LOGGER_URL && process.env.LOGGER_URL

export const options = {
  autoBreadcrumbs: true,
  captureUnhandledRejections: true,
  sendTimeout: 5,
}

if (url) {
  Raven.config(url, options).install()
}
const captureException = (err: any, context?: {}) => {
  if (!dev) {
    Raven.captureException(err, { ...context })
  } else {
    /* tslint:disable */
    window.console && console.error && console.error(err)
  }
}

export { captureException }
