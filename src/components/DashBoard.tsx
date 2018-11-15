import React, { FunctionComponent } from "react"
import { Card, CardContent } from "@material-ui/core"
import { Title } from "react-admin"
import { ClientsChart, SalesChart } from "components/charts"

const data = [
  { name: "Май", order: 4000, sales: 2400, amt: 2400 },
  { name: "Июнь", order: 3000, sales: 1398, amt: 2210 },
  { name: "Июль", order: 2000, sales: 9800, amt: 2290 },
  { name: "Август", order: 2780, sales: 3908, amt: 2000 },
  { name: "Сентябрь", order: 1890, sales: 4800, amt: 2181 },
  { name: "Октябрь", order: 2390, sales: 3800, amt: 2500 },
  { name: "Ноябрь", order: 3490, sales: 4300, amt: 2100 },
]
export const Dashboard: FunctionComponent = (props: any) => (
  <Card>
    <Title title="Welcome to the administration" />
    <CardContent>
      Клиентов за месяц:
      <ClientsChart data={data} />
      Счетов за период:
      <SalesChart data={data} />
    </CardContent>
  </Card>
)
