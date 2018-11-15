import React, { FunctionComponent } from "react"

export const InvoiceTitle: FunctionComponent = ({ record }: any) => (
  <span>{`Cчет № ${+record.id + 1}`}</span>
)
