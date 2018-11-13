import React from "react"
import { TextInput, Edit, SimpleForm } from "react-admin"

export const ClientEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="lastname" />
      <TextInput source="photo" />
      <TextInput source="birthday" />
      <TextInput source="address" />
      <TextInput source="contacts.phone" />
      <TextInput source="documents.pasport" />
    </SimpleForm>
  </Edit>
)
