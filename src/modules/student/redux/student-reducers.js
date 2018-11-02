import { SUBMIT_SEARCH, SUBMIT_CRITERIA, SHOW_ERROR } from "./student-actions";

/**
 * A Reducer to handle all the actions from student components
 * @param {object} state - redux state
 * @param {object} type, payload - hold action type and its payload
 */
const studentReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SUBMIT_SEARCH:
      return newState(state, {
        data: payload.data
      });
    case SUBMIT_CRITERIA:
      return newState(state, {
        criteria: payload.criteria
      });
    case SHOW_ERROR:
      return newState(state, {
        error: payload.error
      });
    default:
      return state;
  }
};

const newState = (previousState, newProps) => {
  return Object.assign({}, previousState, newProps);
};

export default studentReducer;
