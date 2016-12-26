import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlipMove from 'react-flip-move';

import Form from './form';

class App extends Component {

  transformList(list) {
    const sorted = list.sort((a, b) => a.order - b.order);

    return sorted.reduce((acc, resource, i, a) => {
      const { type, order, name } = resource;

      if (type === 'Place') {
        acc.push(resource);
      } else if (!i && type === 'Person') {
        acc.push({ type, order, people: [ name ] });
      } else if (i && type === 'Person' && acc[acc.length-1].type === 'Person') {
        acc[acc.length-1].order = order;
        acc[acc.length-1].people.push(name);
      } else {
         acc.push({ type, order, people: [ name ] });
       }

      return acc;
    }, []);
  }

  renderList(list) {
    return this.transformList(list).map((item, i) => {
      return (
        <div key={i} style={{ height: 50 }}>
          {JSON.stringify(item, null, '\t')}
        </div>
      );
    });
  }

  render() {
    const { list } = this.props;
    return (
      <div className="row">
        <div className="col-md-4">
          <h3>Add To List</h3>
          <Form />
        </div>
        <div className="col-md-8">
          <h3>Optimized List Results</h3>
          <FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
            {this.renderList(list)}
          </FlipMove>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ list }) => {
  return { list };
};

export default connect(mapStateToProps)(App);
