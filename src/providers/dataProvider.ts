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
  hotel: string
  hotelUrl: string
  flyOut: string
  flyIn: string
  cost: number
  profit: number
  timeLife: number
  companions: number[]
}
type DataMock = {
  clients: Client[]
  invoices: Invoice[]
}

export const dataMock: DataMock = {
  clients: [
    {
      id: 1,
      photo:
        "https://www.crn.ru/upload/iblock/b5d/18763190_1726608900689161_555391518_n.jpg",
      name: "Иван",
      lastname: "Иванов",
      patronymic: "Иванович",
      address: "address1",
      birthday: `${new Date(1990, 0, 1)}`,
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
      lastname: "Петрова",
      patronymic: "Петровна",
      address: "address2",
      birthday: `${new Date(1990, 0, 2)}`,
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
