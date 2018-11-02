import { reducer as formReducer } from "redux-form";
import studentReducer from "modules/student/redux/student-reducers";

const appReducer = {
  form: formReducer,
  // other application reducers can be added here
  student: studentReducer,
};

export default appReducer;
