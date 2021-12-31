import React from 'react';
import { I18n } from 'react-i18next';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const FormInput = (props) => {
  const invalid = props.error !== null;
	return (
    <FormGroup>
      <Label for={props.id}>{props.label}</Label>
      <Input id={props.id} type={props.type} value={props.value} onChange={props.onChange} bsSize="sm" invalid={invalid} />
      {props.error && props.error.messages.map((message) => {
        return (
          <I18n key={message}>
          {t => (
            <FormFeedback>{t("Form.Error." + message)}</FormFeedback>
          )}
        </I18n>
          
        )
      })}
    </FormGroup>
	);
}
export default FormInput;