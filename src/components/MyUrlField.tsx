import React from "react"
import { withStyles, WithStyles } from "@material-ui/core/styles"
import LaunchIcon from "@material-ui/icons/Launch"

const styles = {
  link: {
    textDecoration: "none",
  },
  icon: {
    width: "0.5em",
    paddingLeft: 2,
  },
}
interface Props extends WithStyles<typeof styles> {
  record: any
  source: string
}

const MyUrlField: React.SFC<Props> = ({ record = {}, source, classes }) => (
  <a href={record[source]} className={classes.link}>
    {record[source]}
    <LaunchIcon className={classes.icon} />
  </a>
)

export default withStyles(styles)(MyUrlField)
