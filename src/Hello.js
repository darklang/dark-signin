import React, { Component } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import { getHosts, postVisit } from './api';

class Hello extends Component {
	constructor(props){
    super(props)

    this.state = {
      hosts: [],
      selectedHost: '',
      visitor: '',
      checkedIn: false
    }
  }

  componentDidMount(){
    getHosts((result) => {
      this.setState({hosts: result})
    })
  }


  onSubmit = () => {
    postVisit(this.state.selectedHost, this.state.visitor, (success) => {
      this.setState({checkedIn: success})
    })
  }

  selectHost = (event) => {
    const val = event.target.value;
    this.setState({
      selectedHost: val
    })
  }

  setVisitorName = (event) => {
    const val = event.target.value;
    this.setState({
      visitor: val
    })
  }

  render(){
    const { visitor, selectedHost } = this.state;
    if (this.state.checkedIn) {
      return (
        <Paper
          elevation={1}
          style={{'padding': '10px', 'margin': '20px'}}
        >
          Welcome {visitor} ! {selectedHost} will be with you shortly.
        </Paper>)
    }
    else {
  	return (
      <form>
      <FormControl fullWidth={true} margin='normal'>
          <Select
            value={selectedHost}
            onChange={this.selectHost}
          >
          {this.state.hosts.map(h => (<MenuItem value={h}>{h}</MenuItem>) )}
          </Select>
          <FormHelperText>Who are you here to see?</FormHelperText>
      </FormControl>

      <FormControl fullWidth={true} margin='normal'>
        <TextField
          defaultValue={visitor}
          helperText="Your Name"
          onChange={this.setVisitorName}
        />
      </FormControl>

      <FormControl fullWidth={true} margin='normal'>
        <Button variant="contained" color="primary" onClick={this.onSubmit}>Check-in</Button>
      </FormControl>
  		</form>)
    }
  }
}

export default Hello;