import studentSearchSchema from "constants/student-search-schema";
import { searchStudent, submitCriteria } from "modules/student/redux/student-actions";

/**
 * A high order function to handle student search form submission
 * @param {object} dispatch - a Redux dispatcher
 * @param {object} form - object that gather all the values from search form
 */
export const submit = dispatch => form => {
  let data = {};

  studentSearchSchema.forEach((value, key) => {
    data[key] = form[value];
  });

  // console.log(`submit() called => call action ... with data`, data);

  // fire off action to update student search criteria in redux store
  dispatch(submitCriteria(data));

  // fire off action to call REST API and get back the student info for store update
  dispatch(searchStudent(data));
};
