import React, { FunctionComponent } from "react"
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  ReferenceArrayInput,
  SelectArrayInput,
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
      <ReferenceArrayInput
        source="companions"
        reference="clients"
        label="компаньоны"
      >
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
)
