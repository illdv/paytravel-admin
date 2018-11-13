import React, { FunctionComponent } from "react"
import { Admin, Resource } from "react-admin"
// import jsonServerProvider from "ra-data-json-server"
import { ClientList } from "components/Clients/ClientList"
import { createBrowserHistory } from "history"
import CssBaseline from "@material-ui/core/CssBaseline"
import { People } from "@material-ui/icons"
import fakeDataProvider from "ra-data-fakerest"
import rusMessages from "ra-language-russian"

import authProvider from "providers/authProvider"
// import dataProvider from "providers/dataProvider"
import { ClientShow, ClientEdit, ClientCreate } from "components/Clients"
import { dataMock } from "providers/dataProvider"

// const dataProvider = jsonServerProvider("http://jsonplaceholder.typicode.com")
const history = createBrowserHistory()
const dataProvider = fakeDataProvider(dataMock)
const messages = {
  ru: rusMessages,
}
const i18nProvider = (locale: string) => messages[locale]

const App: FunctionComponent<object> = () => (
  <>
    <CssBaseline />
    <Admin
      locale="ru"
      i18nProvider={i18nProvider}
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
        icon={People}
        options={{ label: "Клиенты" }}
      />
    </Admin>
  </>
)

export default App
