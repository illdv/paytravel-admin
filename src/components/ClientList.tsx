import React, { FunctionComponent } from "react"
import { List, Datagrid, TextField } from "react-admin"

export const ClientList: FunctionComponent<object> = (props: any) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="lastname" />
      <TextField source="address" />
      <TextField source="birthday" />
      <TextField source="contacts.phone" />
    </Datagrid>
  </List>
)
