import { useState } from "react";

const useForm = (initialState = {}) => {
  const [inputvalues, setinputvalues] = useState(initialState);

  const resetForm = () => {
    setinputvalues(initialState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setinputvalues({
      ...inputvalues,
      [name]: value,
    });
  };

  const setForm = (newValues) => {
    // setinputvalues(newValues);
  };

  return {
    inputvalues,
    handleInputChange,
    resetForm,
    setForm,
  };
};

export default useForm;
