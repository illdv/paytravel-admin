import React, { SFC } from "react"
import { Admin, Resource } from "react-admin"
import jsonServerProvider from "ra-data-json-server"
import { UserList } from "components/Users"

const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com")
const App: SFC<object> = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
  </Admin>
)

export default App
