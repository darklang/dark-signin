import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';


import './App.css';
import Hello from './Hello';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      hosts: []
    }
  }

  render() {
    return (
      <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Dark SignIn
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} justify="center">
        <Grid item xs={10} md={8}>
        <Hello />
      </Grid>
      </Grid>
      </React.Fragment>
    );
  }
}

export default App;
