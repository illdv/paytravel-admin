import { createMuiTheme } from "@material-ui/core"

const deleteUnderline = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 14,
  },

  overrides: {
    MuiInput: {
      root: {
        "&:before": {
          display: "none",
        },
        "&:after": {
          display: "none",
        },
      },
    },
  },
})

export default deleteUnderline
