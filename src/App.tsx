import React, { FunctionComponent } from "react"
import { Admin, Resource } from "react-admin"
// import jsonServerProvider from "ra-data-json-server"
import { createBrowserHistory } from "history"
import CssBaseline from "@material-ui/core/CssBaseline"
import { People, Receipt } from "@material-ui/icons"
import fakeDataProvider from "ra-data-fakerest"
import rusMessages from "ra-language-russian"

import authProvider from "providers/authProvider"
// import dataProvider from "providers/dataProvider"
import {
  InvoiceList,
  InvoiceCreate,
  InvoiceEdit,
  InvoiceShow,
} from "components/invoices"
import {
  ClientShow,
  ClientEdit,
  ClientCreate,
  ClientList,
} from "components/сlients"
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
      title="Pay-travel admin"
      locale="ru"
      i18nProvider={i18nProvider}
      authProvider={authProvider}
      dataProvider={dataProvider}
      history={history}
    >
      <Resource
        name="clients"
        list={ClientList}
        edit={ClientEdit}
        create={ClientCreate}
        show={ClientShow}
        icon={People}
        options={{ label: "Клиенты" }}
      />
      <Resource
        name="invoices"
        list={InvoiceList}
        edit={InvoiceEdit}
        create={InvoiceCreate}
        show={InvoiceShow}
        icon={Receipt}
        options={{ label: "Счета" }}
      />
    </Admin>
  </>
)

export default App
