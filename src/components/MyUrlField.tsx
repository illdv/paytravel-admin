import React, { SFC } from "react"
import LaunchIcon from "@material-ui/icons/Launch"
import { withStyles, WithStyles } from "@material-ui/core/styles"

const styles = {
  link: {
    textDecoration: "none",
  },
  icon: {
    width: "0.5em",
    paddingLeft: 2,
  },
}
type Props = WithStyles<typeof styles> & {
  record: any
  source: string
}

const MyUrlField: SFC<Props> = ({ record = {}, source, classes }) => (
  <a href={record[source]} className={classes.link}>
    {record[source]}
    <LaunchIcon className={classes.icon} />
  </a>
)

export default withStyles(styles)(MyUrlField)
