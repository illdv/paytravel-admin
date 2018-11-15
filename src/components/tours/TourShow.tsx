import React from "react"
import {
  TextField,
  Show,
  UrlField,
  SimpleShowLayout,
  DateField,
  NumberField,
} from "react-admin"

const TourTitle = ({ record }: any) => <span>{record.hotel}</span>

export const TourShow = (props: any) => (
  <Show {...props} title={<TourTitle />}>
    <SimpleShowLayout>
      <TextField source="hotel" label="Отель" />
      <UrlField source="hotelLink" label="Ссылка на отель" />
      <DateField source="dateStart" label="Дата начала" locales="ru-RU" />
      <NumberField source="cost" label="Цена тура" />
      <TextField source="type" label="Тип" />
      <TextField source="photos" title="Фото" />
      <NumberField source="priority" label="Приоритет отображения" />
    </SimpleShowLayout>
  </Show>
)
