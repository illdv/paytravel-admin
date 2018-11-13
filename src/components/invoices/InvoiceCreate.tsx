import React from "react"
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
} from "react-admin"

export const InvoiceCreate = (props: any) => (
  <Create {...props} title="Создание счета">
    <SimpleForm>
      <TextInput source="hotel" label="отель" />
      <TextInput source="hotelUrl" label="ссылка на отель" />
      <DateInput source="flyOut" label="вылет" />
      <DateInput source="flyIn" label="прилет" />
      <NumberInput source="cost" label="цена" />
      <NumberInput source="profit" label="профит" />
      <NumberInput source="timeLife" label="срок жизни счета" />
      <ArrayInput source="companions">
        <SimpleFormIterator>
          <TextInput source="name" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
)
