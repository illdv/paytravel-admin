import React, { FunctionComponent } from "react"
import { Admin, Resource } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
import { UserList } from "components/Users"
import { createBrowserHistory } from "history"

import authProvider from "providers/authProvider"
const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com")
const history = createBrowserHistory()

const App: FunctionComponent<object> = () => (
  <Admin
    authProvider={authProvider}
    dataProvider={dataProvider}
    history={history}
  >
    <Resource name="users" list={UserList} />
  </Admin>
)

export default App
