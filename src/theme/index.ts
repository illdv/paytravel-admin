import createMuiTheme, {
  ThemeOptions
} from "@material-ui/core/styles/createMuiTheme"
import "typeface-poppins"

function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14,
    },
    // #4F5467
    palette: {
      primary: { main: "#FB9678" },
      secondary: { main: "#3AB7F1" },
      background: { default: "#EDF1F5" },
      text: { primary: "#4d4d4d", secondary: "#a7a9b3" },
      action: {
        // selected: 'rgb(251, 171, 147)',
        // hover: 'rgb(251, 171, 147)',
        active: "#000",
      },
    },

    props: {
      MuiDialog: {
        scroll: "body",
      },
    },

    overrides: {
      MuiPaper: {
        elevation1: {
          boxShadow: "none",
        },
        elevation8: {
          boxShadow: "none",
        },
      },

      MuiInputLabel: {
        root: {
          fontWeight: 300,
          fontStyle: "italic",
        },
      },

      MuiButton: {
        contained: {
          boxShadow: "none",
        },
        root: {
          textTransform: "capitalize",
          fontWeight: 300,
          width: 100,
          fontSize: 14,
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
      MuiDialogTitle: {
        root: {
          padding: 20,
          fontWeight: 300,
          fontSize: 18,
          color: "#343A40",
          height: 60,
        },
      },
      MuiDialogContent: {
        root: {
          padding: 20,
          paddingBottom: 30,
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          borderTop: "1px solid rgba(0, 0, 0, 0.12)",
        },
      },
      MuiDialogActions: {
        root: {
          padding: 20,
          margin: 0,
          height: 60,
        },
      },
      MuiSelect: {
        root: {
          borderRadius: 4,
        },
      },
      MuiList: {
        padding: {
          border: "1px solid rgba(0, 0, 0, 0.12)",
        },
      },
    },
    ...options,
  })
}

export default createMyTheme({})
