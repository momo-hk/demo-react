import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import { TableCell, TableHead, TableRow, TableSortLabel } from 'material-ui/Table';

const TableHeader = ({ schema, sortInfo, sortHandler, className }) => {
  // const columns = [...schema.keys()];
  // const { column, direction } = sortInfo;

  // const header = columns.map(col => (
  //   <Table.HeaderCell
  //     key={shortid.generate()}
  //     sorted={column === col ? direction : null}
  //     onClick={sortHandler(col)}
  //   >
  //     {schema.get(col)}
  //   </Table.HeaderCell>
  // ));

  // return (
  //   <Table.Header>
  //     <Table.Row>
  //       {header}
  //     </Table.Row>
  //   </Table.Header>
  // )
  const columns = [...schema.keys()];
  const { column, direction } = sortInfo;

  return (
    <TableHead className={className}>
      <TableRow>
        {
          columns.map(col => (
            <TableCell 
              key={shortid.generate()}
              sortDirection={column === col ? direction : false }
            >
                <TableSortLabel
                  active={column === col}
                  direction={direction}
                  onClick={sortHandler(col)}
                >
                    {schema.get(col)}
                </TableSortLabel>
            </TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  )
};

TableHeader.propTypes = {
  schema: PropTypes.object.isRequired,
  sortInfo: PropTypes.object.isRequired,
  sortHandler: PropTypes.func.isRequired,
}

export default TableHeader;
