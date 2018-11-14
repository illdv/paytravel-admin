import React, { FunctionComponent } from "react"
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  NumberField,
  DateField,
  EditButton,
  DeleteButton,
  ShowButton,
  ChipField,
  SingleFieldList,
  ReferenceArrayField,
} from "react-admin"

export const InvoiceList: FunctionComponent<object> = (props: any) => (
  <List {...props} title="Список cчетов">
    <Datagrid>
      <TextField source="id" />
      <TextField source="hotel" />
      <UrlField source="hotelUrl" />
      <DateField source="flyOut" />
      <DateField source="flyIn" />
      <NumberField source="cost" />
      <NumberField source="profit" />
      <NumberField source="timeLife" />
      <ReferenceArrayField reference="clients" source="companions">
        <SingleFieldList linkType="show">
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton />
      <DeleteButton />
      <ShowButton />
    </Datagrid>
  </List>
)
