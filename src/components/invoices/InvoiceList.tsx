import React, { FunctionComponent } from "react"
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  NumberField,
  DateField,
  EditButton,
  DeleteButton,
  ShowButton,
} from "react-admin"

const CompanionsField = ({ record }: any) => {
  return (
    <ul style={{ paddingLeft: 0, listStyle: "none" }}>
      {record.companions.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export const InvoiceList: FunctionComponent<object> = (props: any) => (
  <List {...props} title="Список cчетов">
    <Datagrid>
      <TextField source="hotel" />
      <UrlField source="hotelUrl" />
      <DateField source="flyOut" />
      <DateField source="flyIn" />
      <NumberField source="cost" />
      <NumberField source="profit" />
      <NumberField source="timeLife" />
      <CompanionsField />
      <EditButton />
      <DeleteButton />
      <ShowButton />
    </Datagrid>
  </List>
)
