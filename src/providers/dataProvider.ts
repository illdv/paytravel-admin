import { GET_LIST, GET_ONE, CREATE, DELETE } from "react-admin"

type Client = {
  id: number
  photo: string
  name: string
  lastname: string
  patronymic: string
  address: string
  birthday: string
  contacts: object
  documents: object
}
type Invoice = {
  id: number
  hotel: string
  hotelUrl: string
  flyOut: string
  flyIn: string
  cost: number
  profit: number
  timeLife: number
  companions: number[]
}
type Tour = {
  id: number
  hotel: string
  hotelLink: string
  dateStart: string
  dateEnd: string
  cost: number
  type: string
  photos: string[]
  priority: number // 1-10
}
type DataMock = {
  clients: Client[]
  invoices: Invoice[]
  tours: Tour[]
}

export const dataMock: DataMock = {
  clients: [
    {
      id: 1,
      photo:
        "https://radiovera.ru/wp-content/uploads/2018/03/Andrey-Tarasov_.jpg",
      name: "Иван",
      lastname: "Поляков",
      patronymic: "Сергеевич",
      address: "address1",
      birthday: `${new Date(1990, 1, 14)}`,
      contacts: {
        phone: "+7-945-123-33-22",
        skype: "skype1",
        vk: "https://vk.com/user1",
        fb: "https://facebook.com/user1",
        ok: "https://ok.ru/user1",
      },
      documents: {
        pasport: "https://url1",
        zagran: "https://url1",
        visa: "https://url1",
      },
    },
    {
      id: 2,
      photo: "http://biozvezd.ru/images/71/71573/svetlana-zejnalova.jpg",
      name: "Галина",
      lastname: "Сибирякова",
      patronymic: "Петровна",
      address: "address2",
      birthday: `${new Date(1992, 1, 23)}`,
      contacts: {
        phone: "+7-945-123-33-22",
        skype: "skype2",
        vk: "https://vk.com/user2",
        fb: "https://facebook.com/user2",
        ok: "https://ok.ru/user2",
      },
      documents: {
        pasport: "https://url2",
        zagran: "https://url2",
        visa: "https://url2",
      },
    },
  ],
  invoices: [
    {
      id: 1,
      hotel: "hotel1",
      hotelUrl: "https://url1",
      flyOut: `${new Date()}`,
      flyIn: `${new Date()}`,
      cost: 10000,
      profit: 2500,
      timeLife: 2,
      companions: [2],
    },
    {
      id: 2,
      hotel: "hotel2",
      hotelUrl: "https://url2",
      flyOut: `${new Date()}`,
      flyIn: `${new Date()}`,
      cost: 15000,
      profit: 1200,
      timeLife: 5,
      companions: [1, 2],
    },
  ],
  tours: [
    {
      id: 1,
      hotel: "Березка",
      hotelLink: "https://tophotel.ru/berezka",
      dateStart: `${new Date(2018, 11, 30)}`,
      dateEnd: `${new Date(2018, 12, 11)}`,
      cost: 18000,
      type: "Акция",
      photos: [
        "https://t-ec.bstatic.com/images/hotel/max1024x768/757/75788232.jpg",
        "https://s-ec.bstatic.com/images/hotel/max1024x768/154/154565624.jpg",
        "https://s-ec.bstatic.com/images/hotel/max1024x768/148/148981834.jpg",
      ],
      priority: 3,
    },
    {
      id: 2,
      hotel: "Бусинка",
      hotelLink: "https://tophotel.ru/businka",
      dateStart: `${new Date(2018, 12, 15)}`,
      dateEnd: `${new Date(2018, 12, 31)}`,
      cost: 12000,
      type: "Горящий тур",
      photos: [
        "http://www.funisrael.ru/wp-content/uploads/2013/03/rimonim-eilat-hotel.jpg",
      ],
      priority: 5,
    },
  ],
}

type GET_LIST_Params = {
  pagination: {
    page: number
    perPage: number
  }
  sort: {
    field: string
    order: string
  }
  filter: object
}
type GET_ONE_Params = {
  id: string
}
type CREATE_Params = {
  data: Client
}

type Params = GET_LIST_Params & GET_ONE_Params & CREATE_Params

export default (type: string, resource: string, params: Params) => {
  switch (type) {
    case GET_LIST:
      const { page, perPage } = params.pagination
      const { field, order } = params.sort
      const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        filter: JSON.stringify(params.filter),
      }
      // url = `${apiUrl}/${resource}?${stringify(query)}`;
      // break;
      query.sort
      const start = (page - 1) * perPage
      const end = page * perPage - 1
      let res: object[] = dataMock[resource]
      res = res.slice(start, end)
      return Promise.resolve({ data: res, total: res.length })
    case GET_ONE:
      const tmp: object[] = dataMock[resource]
      return Promise.resolve({
        data: tmp.filter((res: any) => res.id === +params.id)[0],
      })
    case CREATE:
      const newId = dataMock[resource].length + 1
      dataMock[resource].push({ id: newId, ...params.data })
      break
    case DELETE:
      break
  }
}
