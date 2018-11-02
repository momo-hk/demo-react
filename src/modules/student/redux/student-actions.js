import { getStudentsByCriteria } from "api/student-info-rest";

/**
 * @constant
 * @type {string} SUBMIT_SEARCH - submit action for student search
 * @type {string} SUBMIT_CRITERIA - criteria for student search
 * @type {string} SHOW_ERROR - error for student search
 */
export const SUBMIT_SEARCH = "student:search";
export const SUBMIT_CRITERIA = "student:criteria";
export const SHOW_ERROR = "student:showError";

/**
 * call REST api
 * Return SUBMIT_SEARCH action if no error. Otherwise, return SHOW_ERROR action
 * @param {object} data - search criteria
 * @param {object} size, page - specify page size and page number
 */
export function searchStudent(data) {
  return dispatch => {
    getStudentsByCriteria("all/students", data)
      .then(response => {
        console.log("request URL: ", response.request.responseURL);
        dispatch({
          type: SUBMIT_SEARCH,
          payload: {
            data: response.data
          }
        });
      })
      .catch(error => {
        dispatch({
          type: SHOW_ERROR,
          payload: {
            error
          }
        });
      });
  };
}

/**
 * simply return SUBMIT_CRITERIA action
 * @param {object} data - search criteria
 */
export function submitCriteria(data) {
  return {
    type: SUBMIT_CRITERIA,
    payload: {
      criteria: data
    }
  };
}
