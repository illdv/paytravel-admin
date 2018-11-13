import React from "react"
import {
  TextInput,
  Edit,
  TabbedForm,
  DateInput,
  FormTab,
  ImageInput,
  ImageField,
} from "react-admin"

export const ClientEdit = (props: any) => (
  <Edit {...props}>
    <TabbedForm>
      <FormTab label="Основные">
        <ImageInput
          source="photo"
          title="Фото"
          label="Related pictures"
          accept="image/*"
        >
          <ImageField source="src" />
        </ImageInput>
        <TextInput source="lastname" />
        <TextInput source="name" />
        <TextInput source="patronymic" />
        <DateInput source="birthday" label="Дата рождения" />
      </FormTab>
      <FormTab label="Контакты">
        <TextInput source="address" label="Адрес" />
        <TextInput source="contacts.phone" label="Телефон" />
        <TextInput source="contacts.vk" label="Страница vk" />
        <TextInput source="contacts.fb" label="Страница facebook" />
        <TextInput source="contacts.ok" label="Страница odnoklassniki" />
        <TextInput source="contacts.skype" label="Skype" />
      </FormTab>
      <FormTab label="Документы">
        <TextInput source="documents.pasport" label="" />
        <TextInput source="documents.zagran" label="" />
        <TextInput source="documents.visa" label="" />
      </FormTab>
    </TabbedForm>
  </Edit>
)
