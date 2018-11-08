import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { AppContainer } from "react-hot-loader"

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  )
}

render(App)

// webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./App", () => {
    // if you are using harmony modules ({modules:false})
    render(App)
    // in all other cases - re-require App manually
    render(require("./App"))
  })
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
