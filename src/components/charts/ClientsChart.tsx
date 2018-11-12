import React, { FunctionComponent } from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelProps,
} from "recharts"

type Props<T> = {
  data: Array<T>
}

export const ClientsChart: FunctionComponent<Props<object>> = ({ data }) => {
  const margin = { top: 20, right: 30, left: 20, bottom: 15 }
  const yLabelStyle: LabelProps = {
    value: "Количество клиентов",
    angle: -90,
    position: "insideBottomLeft",
  }
  const xLabelStyle: LabelProps = {
    value: "Время",
    angle: 0,
    position: "insideBottomRight",
    offset: -10,
  }
  return (
    <AreaChart width={600} height={400} data={data} margin={margin}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" label={xLabelStyle} />
      <YAxis label={yLabelStyle} />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="order"
        stackId="1"
        stroke="#8884d8"
        fill="#8884d8"
        name={"заказы"}
      />
      <Area
        type="monotone"
        dataKey="sales"
        stackId="1"
        stroke="#82ca9d"
        fill="#82ca9d"
        name={"продажи"}
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="#ffc658"
        name={"выручка"}
      />
    </AreaChart>
  )
}
