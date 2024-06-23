import { useState, useCallback } from "react";

const useForm = (initialState = {}) => {
  const [inputvalues, setinputvalues] = useState(initialState);

  const resetForm = useCallback(() => {
    setinputvalues(initialState);
  }, [initialState]);

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setinputvalues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const setForm = useCallback((newValues) => {
    setinputvalues(newValues);
  }, []);

  return {
    inputvalues,
    handleInputChange,
    resetForm,
    setForm,
  };
};

export default useForm;
