import React from "react"
import {
  TextInput,
  Create,
  SimpleForm,
  ImageInput,
  DateInput,
} from "react-admin"

export const ClientCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" label="имя" />
      <TextInput source="lastname" label="фамилия" />
      <ImageInput source="photo" label="фото" />
      <DateInput source="birthday" label="дата рождения" />
      <TextInput source="address" label="адрес" />
      <TextInput source="contacts.phone" label="телефон" />
      <TextInput source="contacts.skype" label="Skype" />
      <TextInput source="contacts.vk" label="страница vk.com" />
      <TextInput source="contacts.fb" label="страница facebook.com" />
      <TextInput source="contacts.ok" label="страница ok.ru" />
      <ImageInput source="documents.pasport" label="скан паспорта" />
      <ImageInput source="documents.zagran" label="скан загран. паспорта" />
      <ImageInput source="documents.visa" label="скан визы" />
    </SimpleForm>
  </Create>
)
//   name: "name1",
//   lastname: "lastname1",
//   photo: "https://url",
//   birthday: "01.01.1990",
//   address: "address1",
//   contacts: {
//   phone: "+7-945-123-33-22",
//     skype: "skype1",
//     vk: "https://vk.com/user1",
//     fb: "https://facebook.com/user1",
//     ok: "https://ok.ru/user1",
// },
// documents: {
//   pasport: "https://url1",
//     zagran: "https://url1",
//     visa: "https://url1",
// },
