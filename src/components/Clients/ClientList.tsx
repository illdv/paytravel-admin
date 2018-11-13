import React, { FunctionComponent } from "react"
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin"

export const ClientList: FunctionComponent<object> = (props: any) => (
  <List {...props} title="Список клиентов">
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="lastname" />
      <TextField source="address" />
      <TextField source="birthday" />
      <TextField source="contacts.phone" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)
