import React from "react"
import {
  Create,
  SimpleForm,
  TextField,
  UrlField,
  DateField,
  NumberField,
} from "react-admin"

export const InvoiceCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextField source="hotel" label="отель" />
      <UrlField source="hotelUrl" label="ссылка на отель" />
      <DateField source="flyOut" label="вылет" />
      <DateField source="flyIn" label="прилет" />
      <NumberField source="cost" label="цена" />
      <NumberField source="profit" label="профит" />
      <NumberField source="timeLife" label="срок жизни счета" />
    </SimpleForm>
  </Create>
)
