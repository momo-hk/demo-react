import React from "react";
import TableContent from "./components/display";

const Table = props => {
  const { schema, dataSet } = props;

  if (dataSet !== undefined) {
    return (
      <div>
        <TableContent schema={schema} dataSet={dataSet} />
      </div>
    );
  } else {
    return null;
  }
  
};

export default Table;