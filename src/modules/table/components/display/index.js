import React, { Component } from "react";
import TableHeader from "./table-content-header";
import TableRows from "./table-content-body";
import TablePaginationFooter from '../pagination'

import PropTypes from "prop-types";
import _ from "lodash";

import { withStyles, Table } from 'material-ui';
import styles from './index-style'

/**
 * Display a data in tabular format. Since the table is sortable, it keeps the table data in its state
 * @constructor
 */
class TableContent extends Component {
  state = {
    sortInfo: {
      column: null,
      direction: 'desc'
    },
    pageInfo: {
      page: 0,
      rowsPerPage: 5
    },
    data: this.props.dataSet,
  };

  /**
   * Handle sortable column
   */
  handleSort = clickedColumn => () => {
    const { sortInfo, data } = this.state;
    const { column, direction } = sortInfo;

    if (column !== clickedColumn) {
      this.setState({
        sortInfo: {
          column: clickedColumn,
          direction: "asc"
        },
        data: _.sortBy(data, [clickedColumn])
      });

      return;
    }

    this.setState({
      data: data.reverse(),
      sortInfo: {
        column,
        direction: direction === "asc" ? "desc" : "asc"
      }
    });
  };

  /**
   * Handle Page Size option change
   */
  handleChangePage = (event, page) => {
    this.setState(prevState => ({ 
      pageInfo: {
        ...prevState.pageInfo,
        page
      } 
    }));
  }
  handleChangeRowsPerPage = event => {
    this.setState(prevState => ({
      pageInfo: {
        ...prevState.pageInfo,
        rowsPerPage: event.target.value
      }
    }));
  };

  /**
   *  Update the table data whenever a new prop is received
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.dataSet
    });
  }

  render() {
    /**
     * In order to correctly display the data, it requires the data schema
     * @constant
     */
    const { schema } = this.props;
    const { data, sortInfo, pageInfo } = this.state;
    const { tableContainer, tableHeader, tableRow } = this.props.classes;

    if (schema) {
      return (

          <Table className={tableContainer}>
            <TableHeader
              schema={schema}
              sortInfo={sortInfo}
              sortHandler={this.handleSort}
              className={tableHeader}
            />
            <TableRows 
              schema={schema}
              dataSet={data} 
              pageInfo={pageInfo} 
              className={tableRow}
            />
            <TablePaginationFooter 
              total={data.length}
              pageInfo={pageInfo}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              onChangePage={this.handleChangePage}
            />
          </Table>

      );
    }
  }
}

TableContent.propTypes = {
  schema: PropTypes.object,
  dataSet: PropTypes.array
};

export default withStyles(styles)(TableContent);
