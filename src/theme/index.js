import { createMuiTheme } from 'material-ui/styles';

const fontSize = 14;

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        fontSize,
        lineHeight: '1em'
      },
    },
    MuiFormLabel: {
      root: {
        fontSize
      }
    },
    MuiIconButton: {
      root: {
        color: 'black',
        '&:hover': {
          backgroundColor: '#FFB74D',
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          },
          '&$disabled': {
            backgroundColor: 'transparent'
          }
        }
      }
    },
  }
});

export default theme;