import React from 'react';
import {Row, Col} from 'reactstrap';
import NameHeader from './NameHeader';
import NameForm from './NameForm';

export default class Name extends React.Component {
    constructor() {
      super();
      this.state = {
        name: null
      };
    }

    nameUpdateHandler(name) {
      this.setState(() => {
        return {
          name: name
        }
      })
    }

    render() {
      return (
        <Row>
          <Col md={4}>
            <NameHeader name={this.state.name} />
            <NameForm onUpdate={this.nameUpdateHandler.bind(this)} />
          </Col>
        </Row>
      );
    }
}
