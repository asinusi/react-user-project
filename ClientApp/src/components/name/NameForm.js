import React from 'react';
import { Form, Button } from 'reactstrap';
import FormInput from '../ui/FormInput';
import { addName } from '../../api/names-api';
import { I18n } from 'react-i18next';
import ApiError from '../../api/api-error';

export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      error: null
    };
  }

  async submitHandler(event) {
    event.preventDefault();
    const name = this.state.name;
    const response = await addName(name);
    if (response instanceof ApiError) {
      this.setState(() => {
        return {
          error: response
        }
      })
    } else {
      //Update parent component
      this.props.onUpdate(name);
      this.setState(() => {
          return {
              name: '',
              error: null
          }
      });
    }
  }

  inputNameChangeHandler(event) {
    const name = event.target.value;
    this.setState(() => {
      return {
          name: name
      }
    });
  }
  render() {
    return (
      <I18n>
      {t => (
        <Form onSubmit={this.submitHandler.bind(this)} noValidate>
          <FormInput type="text" value={this.state.name} label={t("Form.Label")} error={this.state.error} onChange={this.inputNameChangeHandler.bind(this)} />
          <Button className='mt-3 mb-3' type="submit">{t("Form.Button")}</Button>
        </Form>
      )}
    </I18n>
    );
  }
}