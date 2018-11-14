import React, { FunctionComponent } from "react"
import {
  List,
  Datagrid,
  TextField,
  ShowButton,
  EditButton,
  DeleteButton,
  UrlField,
  DateField,
  NumberField,
} from "react-admin"

// const ContactsField = ({ record }: any) => {
//   return (
//     <ul style={{ listStyle: "none", paddingLeft: 0 }}>
//       <li>
//         <span>тел.: </span>
//         {record.contacts.phone}
//       </li>
//       <li>
//         <span>VK: </span>
//         {record.contacts.vk}
//       </li>
//       <li>
//         <span>Skype: </span>
//         {record.contacts.skype}
//       </li>
//     </ul>
//   )
// }

export const TourList: FunctionComponent<object> = (props: any) => (
  <List {...props} title="Список туров">
    <Datagrid>
      <TextField source="hotel" label="Отель" />
      <UrlField source="hotelLink" label="Ссылка" />
      <DateField source="dateStart" label="Дата начала" locales="ru-RU" />
      <NumberField source="cost" label="Цена тура" />
      <TextField source="photos" label="Фото" />
      <TextField source="type" label="Тип" />
      <NumberField source="priority" label="Приоритет" />
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)
