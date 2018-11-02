const styles = (theme) => ({
  tableContainer: {
    margin: `${theme.spacing.unit * 3}px auto`,
    width: '60%',
  },
  tableHeader: {
    backgroundColor: '#FFB74D'
  },
  tableRow: {
    '&:hover': {
      backgroundColor: '#FFF9C4'
    }
  }
});

export default styles;