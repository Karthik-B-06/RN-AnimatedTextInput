import { useState } from "react";

export const useFormData = (callback, formValues) => {

  const [values, setValues] = useState({
    ...formValues
  });

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = (key, value) => {
    setValues(values => ({ ...values, [key]: value }));
  };

  return [
    handleChange,
    handleSubmit,
    values,
  ]
};