import React, { FunctionComponent } from "react"
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin"

const ContactsField = ({ record }: any) => {
  return (
    <ul style={{ listStyle: "none", paddingLeft: 0 }}>
      <li>
        <span>тел.: </span>
        {record.contacts.phone}
      </li>
      <li>
        <span>VK: </span>
        {record.contacts.vk}
      </li>
      <li>
        <span>Skype: </span>
        {record.contacts.skype}
      </li>
    </ul>
  )
}

export const ClientList: FunctionComponent<object> = (props: any) => (
  <List {...props} title="Список клиентов">
    <Datagrid rowClick="false">
      <TextField source="lastname" label="Фамилия" />
      <TextField source="name" label="Имя" />
      <TextField source="patronymic" label="Отчество" />
      <ContactsField source="contacts" label="Контакты" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)
