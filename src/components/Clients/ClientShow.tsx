import React from "react"
import { TextField, Show, SimpleForm } from "react-admin"

export const ClientShow = (props: any) => (
  <Show {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="lastname" />
      <TextField source="photo" />
      <TextField source="birthday" />
      <TextField source="address" />
      <TextField source="contacts.phone" />
      <TextField source="documents.pasport" />
    </SimpleForm>
  </Show>
)
