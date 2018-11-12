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
