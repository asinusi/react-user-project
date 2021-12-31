import React from 'react';
import { FormGroup,Label, Input } from 'reactstrap';

export default function FormSelect(props) {
  return (
    <FormGroup>
      <Label for={props.name}>{props.label}</Label>
      <Input id={props.name} name={"select"} type={"select"} value={props.value} onChange={props.onChange} className='form-select' bsSize="sm">
        {props.options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          )
        })}
      </Input>
    </FormGroup>
  )
}
export function mapToOptions(map) {
  return Object.entries(map).map((item) => ({
    name: item[1], 
    value: item[0]
  }));
}