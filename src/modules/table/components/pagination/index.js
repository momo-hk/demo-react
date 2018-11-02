import React from "react";
import PropTypes from 'prop-types';
import TablePaginationAction from './table-pagination-action'
import { TableRow, TableFooter, TablePagination } from "material-ui";

const TablePaginationFooter = (props) => {
  const { total, pageInfo, onChangePage, onChangeRowsPerPage } = props
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          count={total}
          rowsPerPage={pageInfo.rowsPerPage}
          page={pageInfo.page}
          onChangeRowsPerPage={onChangeRowsPerPage}
          onChangePage={onChangePage}
          Actions={TablePaginationAction}
        />
      </TableRow>
    </TableFooter>
  )  
}


TablePaginationFooter.prototype = {
  total: PropTypes.number,
  pageInfo: PropTypes.object.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeRowsPerPage: PropTypes.func.isRequired
}

export default TablePaginationFooter