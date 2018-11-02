import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import { TableCell, TableBody, TableRow } from 'material-ui/Table';

const TableRows = ({ schema, dataSet, pageInfo, className }) => {
  const columns = [...schema.keys()];
  const { page, rowsPerPage } = pageInfo;
  const pageNum = page * rowsPerPage;

  return (
    <TableBody>
      {dataSet.slice(pageNum, pageNum + rowsPerPage).map(data => (
        <TableRecord 
          key={shortid.generate()} 
          columns={columns} 
          data={data} 
          className={className} />
      ))}
    </TableBody>
  )
}

const TableRecord = ({ columns, data, className }) => {
  return (
    <TableRow
        hover
        tabIndex={-1}
        className={className}
      > 
      {
        columns.map(col => ( 
            <TableCell key={shortid.generate()}>{data[col]}</TableCell>
        ))
      } 
    </TableRow>
  )
}

TableRows.propTypes = {
  schema: PropTypes.object,
  dataSet: PropTypes.array,
  pageInfo: PropTypes.object
}

export default TableRows;
