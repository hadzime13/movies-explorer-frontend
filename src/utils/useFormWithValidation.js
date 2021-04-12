import React, { useCallback, useState } from 'react';

const useFormWithValidation = (formData) => {
  const [data, setData] = useState(formData);
  const [errors, setErrors] = useState(formData);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage })
    setIsValid(target.closest(".form__container").checkValidity());
  };

  // const validateForm = () => {

  // }

  const resetForm = useCallback((emptyData = {}, emptyErrors = {}, newIsValid = false) => {
    setData(emptyData);
    setErrors(emptyErrors);
    setIsValid(newIsValid);
  }, [])

  return { data, errors, handleChange, isValid, resetForm };
}

export default useFormWithValidation;