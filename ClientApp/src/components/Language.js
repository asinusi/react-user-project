import React from 'react';
import i18n from '../i18n';
import {Row, Col} from 'reactstrap';
import FormSelect, {mapToOptions} from './ui/FormSelect';

export default class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en'
    }
  }

  //List of languages that are supported
  languageOptions() {
    return mapToOptions({
      en: 'English',
      fr: 'French'
    });
  }

  onChangeHandler(event) {
    const lang = event.target.value;
    this.setState(() => ({
      language: lang
    }));
    
    i18n.changeLanguage(lang);
  }

  render() {
    const languages = this.languageOptions();
    return (
      <Row>
      <Col md={4}>
        <FormSelect 
          label={i18n.t("Language.Label")} 
          value={this.state.language}
          name={"language-select"}
          onChange={this.onChangeHandler.bind(this)}
          options={languages}>
        </FormSelect>
      </Col>
      </Row>
    )
  }
}