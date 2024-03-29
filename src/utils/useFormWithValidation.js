import React, { useCallback, useState } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { inputEmailErrorMessage, inputNameErrorMessage } from '../config/index';

const useFormWithValidation = (formData, initialData) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [data, setData] = useState(initialData ? initialData : formData);
  const [errors, setErrors] = useState(formData);
  const [isValid, setIsValid] = useState(false);
  const [isDifferent, setIsDifferent] = useState({
    name: false,
    email: false,
  });

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;
    if (evt.target.validity.patternMismatch) {
      name === 'email' && target.setCustomValidity(inputEmailErrorMessage);
      name === 'name' && target.setCustomValidity(inputNameErrorMessage);
    }
    else {
      evt.target.setCustomValidity('');
    }
    setIsDifferent({ ...isDifferent, [name]: currentUser[name] !== value });
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage })
    setIsValid(target.closest(".form__container").checkValidity());
  };


  const resetForm = useCallback((emptyData = {}, emptyErrors = {}, newIsValid = false) => {
    setData(formData);
    setErrors(formData);
    setIsValid(newIsValid);
  }, [setData, setErrors, setIsValid, formData])

  return { data, errors, handleChange, isValid, isDifferent, resetForm };
}

export default useFormWithValidation;