import React from "react"
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
} from "react-admin"

export const InvoiceEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="hotel" />
      <TextInput source="hotelUrl" />
      <DateInput source="flyOut" />
      <DateInput source="flyIn" />
      <NumberInput source="cost" />
      <NumberInput source="profit" />
      <NumberInput source="timeLife" />
    </SimpleForm>
  </Edit>
)
