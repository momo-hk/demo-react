import React from "react";
import { connect } from "react-redux";
import StudentSearch from "./components/search";
import Table from 'modules/table/'
import DisplaySchema from 'constants/student-display-schema'

/**
 * Summary: A container to control StudentSearch and StudentDisplay components.
 * @class
 */
const Student = (props) => (
  <div>
    <StudentSearch />
    <Table schema={DisplaySchema} dataSet={props.studentInfo} />
  </div>
)

/**
 * it connects to redux store to get 2 data:
 *  1) Student info from rest API and
 *  2) student criteria from search form
 */
const mapStateToProps = (state, props) => {
  return {
    studentInfo: state.student.data,
    studentCriteria: state.student.criteria
  };
};

export default connect(mapStateToProps)(Student);
