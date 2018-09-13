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
      checkedIn: false,
      error: null
    }
  }

  componentDidMount(){
    getHosts(
      (result) => { 
        this.setState({hosts: result.data})
      },
      (error) => { 
        this.setState({error: error.message})
      }
    )
  }

  onSubmit = () => {
    postVisit(this.state.selectedHost, this.state.visitor,
      (error) => {
        this.setState({checkedIn: !error, error: error ? error.message : null })
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
    const { visitor, selectedHost, checkedIn, error } = this.state;

    return (<div>
      { error &&
        <Paper
          elevation={3}
          style={{'padding': '10px', 'margin': '20px', 'backgroundColor': '#f44336', 'color': '#fff'}}
        >
        {error}
        </Paper>
      }

      { checkedIn ? 
        <Paper
          elevation={1}
          style={{'padding': '10px', 'margin': '20px'}}
        >
          Welcome {visitor}! {selectedHost} will be with you shortly.
        </Paper>
      : 
      <form>
      <FormControl fullWidth={true} margin='normal'>
          <Select
            value={selectedHost}
            onChange={this.selectHost}
          >
          {this.state.hosts.map(h => (<MenuItem value={h} key={h}>{h}</MenuItem>) )}
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
      </form>
      }

    </div>)
  }

}

export default Hello;