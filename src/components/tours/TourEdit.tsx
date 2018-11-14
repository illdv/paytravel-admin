import React from "react"
import {
  TextInput,
  Edit,
  DateInput,
  ImageInput,
  NumberInput,
  SelectInput,
  SimpleForm,
} from "react-admin"

const typeList = [
  { id: "Горящий тур", name: "Горящий тур" },
  { id: "Спец. предложение", name: "Спец. предложение" },
  { id: "Акция", name: "Акция" },
]

export const TourEdit = (props: any) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="hotel" label="Отель" />
      <TextInput source="hotelLink" label="Ссылка на отель" />
      <DateInput source="dateStart" label="Дата начала" />
      <DateInput source="dateEnd" label="Дата конца" />
      <NumberInput source="cost" label="Цена тура" />
      <SelectInput source="type" label="Тип" choices={typeList} />
      <ImageInput source="photos" title="Фото" label="Фото" accept="image/*" />
      <NumberInput source="priority" label="Приоритет отображения" />
    </SimpleForm>
  </Edit>
)
