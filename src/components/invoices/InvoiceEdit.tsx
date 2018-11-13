import React, { FunctionComponent } from "react"
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
} from "react-admin"
import { InvoiceTitle } from "./InvoiceTitle"

export const InvoiceEdit: FunctionComponent = (props: any) => (
  <Edit {...props} title={<InvoiceTitle />}>
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
