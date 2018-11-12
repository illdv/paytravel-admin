import React, { FunctionComponent } from "react"
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  NumberField,
  DateField,
} from "react-admin"

const TagsField = ({ record }: any) => (
  <ul style={{ paddingLeft: 0, listStyle: "none" }}>
    {record.companions.map((item: any) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

export const InvoiceList: FunctionComponent<object> = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="hotel" />
      <UrlField source="hotelUrl" />
      <DateField source="flyOut" />
      <DateField source="flyIn" />
      <NumberField source="cost" />
      <NumberField source="profit" />
      <NumberField source="timeLife" />
      <TagsField source="companions" />
    </Datagrid>
  </List>
)
