import React from "react";
import Student from "modules/student/";

import { withStyles , AppBar, Toolbar, Typography, Avatar } from 'material-ui'
import ReactjsPic from '../assets/reactjs.png'
import MaterialUiPic from '../assets/materialUI.png'

const styles = {
  avatar: {
    margin: 6
  }
}

/**
 * Define the application layout and components to be rendered
 */
const App = (props) => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Avatar src={ReactjsPic} className={props.classes.avatar} />
        <Avatar src={MaterialUiPic} className={props.classes.avatar} />
        <Typography variant="title" color="inherit">
          Simple React application (with Material UI)
        </Typography>
      </Toolbar>
    </AppBar>
    <Student/>
  </div>
)

export default withStyles(styles)(App);
