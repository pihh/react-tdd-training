import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobApplicationForm from './JobApplicationForm';
import { FORM_FIELDS } from './JobApplicationForm.constants';
import { inputTypeInstance } from '../../utils/test-helpers';
import user from '@testing-library/user-event'

const FIELDS:any = FORM_FIELDS.map((field:any) => {
  return {
    ...field,
    selector: `[data-test="form-field::${field.name}"]`,
    instance: inputTypeInstance[field.type]
  }
})

describe('<JobApplicationForm />', () => {
  test('it should mount', () => {
    render(<JobApplicationForm />);

    const jobApplicationForm = screen.getByTestId('JobApplicationForm');

    expect(jobApplicationForm).toBeInTheDocument();
  });

  test('it should contain all the fields', ()=>{


    const {container} = render(<JobApplicationForm />);

    for(let field of FIELDS){
      const $el = container.querySelector(field.selector);

      expect($el).toBeInTheDocument();
      expect($el).toBeInstanceOf(field.instance)
    }
  })

  test('it should enable submit if all fields are valid', async ()=>{
   
    const {container} = render(<JobApplicationForm />);
    user.setup()
    // Helpers
    const checkValidity = ()=>{
      let form:any = container.querySelector('form')
      let isValid = form.checkValidity();
      return isValid
    }

    const checkDisabled = ()=>{
      let submitButton:any = container.querySelector('[data-test="form-field::button-submit"]')
      return submitButton.disabled
    }

    let isValid = checkValidity()
    let isDisabled = checkDisabled()
    // Should be invalid 
    expect(isValid).toBeFalsy();
    expect(isDisabled).toBeTruthy();

    for(let field of FIELDS){
      const $el = container.querySelector(field.selector);
      if(field.type =="checkbox"){
        await user.click($el)
      }else if(field.type =="select"){
        await user.selectOptions($el,'CA')
      }else{
        await user.type($el,field.confirmValue)
      }
      
    }

    isValid = checkValidity()
    isDisabled = checkDisabled()
    
    // Should be valid 
    expect(isDisabled).toBeFalsy();
    expect(isValid).toBeTruthy();
  })
});