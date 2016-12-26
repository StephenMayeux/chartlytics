import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      order: '',
      name: ''
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    let { type, order, name } = this.state;
    order = parseInt(order, 10);
    this.props.addItem({ type, order, name });
    this.setState({ type: '', order: '', name: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
          <label>Type: Person or Place</label>
          <input autoFocus className="form-control" type="text" name="type" value={this.state.type} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <label>Order</label>
          <input className="form-control" type="text" name="order" value={this.state.order} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input className="form-control" type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Add Object</button>
        </div>
      </form>
    );
  }
}

export default connect(null, actions)(Form);
