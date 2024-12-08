import React, { FC, useEffect, useRef } from "react";
import "./JobApplicationForm.css";
import { FORM_FIELDS } from "./JobApplicationForm.constants";
import { useState } from "react";

interface JobApplicationFormProps {}

const JobApplicationForm: FC<JobApplicationFormProps> = () => {
  const [name, setname] = useState(
    FORM_FIELDS.find((field: any) => field.name == "name").defaultValue
  );
  const [bio, setbio] = useState(
    FORM_FIELDS.find((field: any) => field.name == "bio").defaultValue
  );
  const [jobLocation, setjobLocation] = useState(
    FORM_FIELDS.find((field: any) => field.name == "jobLocation").defaultValue
  );
  const [conditions, setconditions] = useState(
    FORM_FIELDS.find((field: any) => field.name == "conditions").defaultValue
  );

  const formRef: any = useRef(null);
  const fields = FORM_FIELDS.map((field: any) => {
    let fieldName = field.name;
    let value = name;
    let onChange = setname;
    if (fieldName == "bio") {
      value = bio;
      onChange = setbio;
    } else if (fieldName == "jobLocation") {
      value = jobLocation;
      onChange = setjobLocation;
    } else if (fieldName == "conditions") {
      value = conditions;
      onChange = setconditions;
    }
    return {
      ...field,
      value,
      onChange,
    };
  });

  const [disabled, setDisabled] = useState(true);
  const handleValidity = () => {
    setDisabled(!formRef?.current?.checkValidity());
  };
  useEffect(() => {
    formRef?.current?.addEventListener("change", handleValidity, true);
    return () => {
      formRef?.current?.removeEventListener("change", handleValidity, true);
    };
  }, []);

  return (
    <div className="JobApplicationForm" data-testid="JobApplicationForm">
      <h1>Job Application Form Component</h1>
      <form ref={formRef}>
        {fields.map((field: any, index: number) => (
          <div key={index}>
            {field.type == "text" && (
              <>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  data-test={`form-field::${field.name}`}
                  type="text"
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.value}
                  required={field.required}
                  onChange={(e: any) => {
                    field.onChange(e.target.value || "");
                  }}
                />
              </>
            )}
            {field.type == "textarea" && (
              <>
                <label htmlFor={field.name}>{field.label}</label>
                <textarea
                  required={field.required}
                  data-test={`form-field::${field.name}`}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.value}
                  onChange={(e: any) => {
                    field.onChange(e.target.value || "");
                  }}
                />
              </>
            )}
            {field.type == "select" && (
              <>
                <label htmlFor={field.name}>{field.label}</label>
                <select
                  required={field.required}
                  data-test={`form-field::${field.name}`}
                  id={field.name}
                  name={field.name}
                  value={field.value}
                  onChange={(e: any) => {
                    field.onChange(e.target.value || "");
                  }}
                >
                  {field.options.map((option: any, j: number) => (
                    <option
                      value={option.value}
                      disabled={option.disabled}
                      key={`option-${j}`}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </>
            )}
            {field.type == "checkbox" && (
              <>
                <label htmlFor={field.name}>
                  <input
                    required={field.required}
                    type="checkbox"
                    data-test={`form-field::${field.name}`}
                    id={field.name}
                    name={field.name}
                    value={field.value}
                    onChange={(e: any) => {
                      field.onChange(e.target.value == "true");
                    }}
                  />
                  {field.label}
                </label>
              </>
            )}
          </div>
        ))}

        <button
          disabled={disabled}
          type="submit"
          data-test={`form-field::button-submit`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
