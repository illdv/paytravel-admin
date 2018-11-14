import React from "react"
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
  CreateButton,
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
      <ReferenceArrayInput
        source="companions"
        reference="clients"
        label="companions"
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <CreateButton />
    </SimpleForm>
  </Create>
)
