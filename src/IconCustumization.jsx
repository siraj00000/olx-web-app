import { createMuiTheme , MuiThemeProvider} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
    palette: {
      type: "light"
    }
  },
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,1)'
        },
        '&.Mui-focused': {
          backgroundColor: 'rgba(255,255,255,1)'
        }
      }
    }
  },
  // props: {
  //     MuiTextField: {
  //       InputLabelProps: {
  //           shrink: false
  //       }
  //   }
  // }
});
export default theme;