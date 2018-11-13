import React from "react"
import {
  TextField,
  Show,
  TabbedShowLayout,
  Tab,
  UrlField,
  ImageField,
  SimpleShowLayout,
  DateField,
} from "react-admin"

const FullNameField = ({ record }: any) => (
  <span>
    {record.lastname} {record.name} {record.patronymic}
  </span>
)

export const ClientShow = (props: any) => (
  <Show {...props} title={<FullNameField />}>
    <SimpleShowLayout title={FullNameField}>
      <ImageField source="photo" title="Фото" />
      <FullNameField source="name" />
      <DateField source="birthday" label="Дата рождения" locales="ru-RU" />
      <TabbedShowLayout>
        <Tab label="Контакты">
          <TextField source="address" label="Адрес" />
          <TextField source="contacts.phone" label="Телефон" />
          <UrlField source="contacts.vk" label="Страница vk" />
          <UrlField source="contacts.fb" label="Страница facebook" />
          <UrlField source="contacts.ok" label="Страница odnoklassniki" />
          <TextField source="contacts.skype" label="Skype" />
        </Tab>
        <Tab label="Документы">
          <UrlField source="documents.pasport" label="" />
          <UrlField source="documents.zagran" label="" />
          <UrlField source="documents.visa" label="" />
        </Tab>
      </TabbedShowLayout>
    </SimpleShowLayout>
  </Show>
)
