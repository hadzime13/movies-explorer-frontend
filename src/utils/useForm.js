import React from "react";

const useForm = (filmForm) => {
  const [data, setData] = React.useState(filmForm);

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const name = target.name;
    setData({ ...data, [name]: value });
  };

  return { data, handleChange, setData };
}

export default useForm;
