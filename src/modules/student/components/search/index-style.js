const styles = theme => ({
  formContainer: {
      margin: `${theme.spacing.unit * 3}px auto`,
      width: '50%',
  },
  formHeader: {
      background: '#8BC34A',
      padding: theme.spacing.unit * 2,
      // color: '#616161'
      color: '#CCFF90',
      fontSize: 18,
  },
  formContent: {
      display: 'flex',
      flexWrap: 'wrap',
      background: '#DCEDC8'
  },
  formText: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      flexGrow: 1,
      fontSize: 14,
  },
  formButton: {
      margin: theme.spacing.unit
  }
});

export default styles;