import React, { FunctionComponent, ReactElement } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelProps,
} from "recharts"

type Props<T> = {
  tooltipName?: ReactElement<any>
  data: Array<T>
}
export const SalesChart: FunctionComponent<Props<object>> = ({
  tooltipName,
  data,
}) => {
  const margin = { top: 20, right: 30, left: 20, bottom: 15 }
  const xLabelStyle: LabelProps = {
    value: "Время",
    angle: 0,
    position: "insideBottomRight",
    offset: -10,
  }
  const yLabelStyle: LabelProps = {
    value: "Количество счетов",
    angle: -90,
    position: "insideBottomLeft",
  }

  return (
    <BarChart width={600} height={300} data={data} margin={margin}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" label={xLabelStyle} />
      <YAxis label={yLabelStyle} />
      <Tooltip content={tooltipName} />
      <Legend />
      <Bar dataKey="sales" stackId="a" fill="#8884d8" name={"продажи"} />
      <Bar dataKey="order" stackId="a" fill="#82ca9d" name={"заказы"} />
    </BarChart>
  )
}
