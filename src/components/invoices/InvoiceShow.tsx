import React from "react"
import {
  Show,
  SimpleForm,
  TextField,
  UrlField,
  DateField,
  NumberField,
} from "react-admin"

export const InvoiceShow = (props: any) => (
  <Show {...props}>
    <SimpleForm>
      <TextField source="hotel" label="отель" />
      <UrlField source="hotelUrl" label="ссылка на отель" />
      <DateField source="flyOut" label="вылет" />
      <DateField source="flyIn" label="прилет" />
      <NumberField source="cost" label="цена" />
      <NumberField source="profit" label="профит" />
      <NumberField source="timeLife" label="срок жизни счета" />
    </SimpleForm>
  </Show>
)
