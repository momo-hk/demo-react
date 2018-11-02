import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import App from "app/";
import store from "app/redux/app-store";
import theme from './theme/'
import { MuiThemeProvider } from 'material-ui/styles';
import {searchStudent} from "./modules/student/redux/student-actions";

// set the initial state of store
store.dispatch(searchStudent({}));

render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>, 
document.getElementById("root"));
