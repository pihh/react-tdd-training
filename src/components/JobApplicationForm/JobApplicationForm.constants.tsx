export const FORM_FIELDS: any = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Full name",
    defaultValue: "Pihh",
    required: true,
      confirmValue:"Pihh"
  },
  {
    name: "bio",
    label: "Bio",
    type: "textarea",
    placeholder: "Tell us more about yourseld",
    defaultValue: "",
    min: 20,
    required: true,
    confirmValue:"Bio textarea"
  },
  {
    name: "jobLocation",
    label: "Job Location",
    type: "select",
    placeholder: "Tell us more about yourseld",
    options: [
      {
        value: "",
        label: "Select a country",
        disabled: true,
      },
      { value: "US", label: "United States", disabled: false },
      { value: "GB", label: "United Kingdom", disabled: false },
      { value: "CA", label: "Canada", disabled: false },
      { value: "IN", label: "India", disabled: false },
      { value: "AU", label: "Australia", disabled: false },
    ],
  confirmValue:"GB",
    required: true,
  },
  {
    name: "conditions",
    label: "I agree to the terms and conditions",
    type: "checkbox",
  confirmValue:true,
    required: true,
  },
];
