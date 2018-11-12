import React, { FunctionComponent } from "react"
import { Admin, Resource } from "react-admin"
// import jsonServerProvider from "ra-data-json-server"
import { ClientList } from "components/ClientList"
import { createBrowserHistory } from "history"
import CssBaseline from "@material-ui/core/CssBaseline"
import fakeDataProvider from "ra-data-fakerest"

import authProvider from "providers/authProvider"
// import dataProvider from "providers/dataProvider"
import { ClientShow } from "components/ClientShow"
import { ClientEdit } from "components/ClientEdit"
import { ClientCreate } from "components/ClientCreate"
import { dataMock } from "providers/dataProvider"
// const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com")

const history = createBrowserHistory()
const dataProvider = fakeDataProvider(dataMock)

const App: FunctionComponent<object> = () => (
  <>
    <CssBaseline />
    <Admin
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
    >
      <Resource
        name="clients"
        list={ClientList}
        show={ClientShow}
        edit={ClientEdit}
        create={ClientCreate}
        options={{ label: "Клиенты" }}
      />
    </Admin>
  </>
)

export default App
