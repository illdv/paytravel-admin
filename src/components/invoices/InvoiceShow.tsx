import React, { FunctionComponent } from "react"
import {
  Show,
  SimpleShowLayout,
  TextField,
  UrlField,
  DateField,
  NumberField,
  SingleFieldList,
  ReferenceArrayField,
  ChipField,
} from "react-admin"
import { InvoiceTitle } from "./InvoiceTitle"

export const InvoiceShow: FunctionComponent = (props: any) => {
  return (
    <Show {...props} title={<InvoiceTitle />}>
      <SimpleShowLayout>
        <TextField source="hotel" label="отель" />
        <UrlField source="hotelUrl" label="ссылка на отель" />
        <DateField source="flyOut" label="вылет" />
        <DateField source="flyIn" label="прилет" />
        <NumberField source="cost" label="цена" />
        <NumberField source="profit" label="профит" />
        <NumberField source="timeLife" label="срок жизни счета" />
        <ReferenceArrayField source="companions" reference="clients">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
      </SimpleShowLayout>
    </Show>
  )
}
