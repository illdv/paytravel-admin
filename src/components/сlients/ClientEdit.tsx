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

const ClientEditTitle = ({ record }: any) => (
  <span>
    редактирование: {record.lastname} {record.name} {record.patronymic}
  </span>
)

export const ClientEdit = (props: any) => (
  <Edit {...props} title={<ClientEditTitle />}>
    <TabbedForm>
      <FormTab label="Основные">
        <ImageInput source="photo" title="Фото" label="Фото" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
        <TextInput source="lastname" label="Фамилия" />
        <TextInput source="name" label="Имя" />
        <TextInput source="patronymic" label="Отчество" />
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
        <TextInput source="documents.pasport" label="Скан. паспорта" />
        <TextInput source="documents.zagran" label="Скан. загран. паспорта" />
        <TextInput source="documents.visa" label="Скан. визы" />
      </FormTab>
    </TabbedForm>
  </Edit>
)
