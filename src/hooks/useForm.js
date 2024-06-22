import { useState } from "react"

const useForm = (initialState = {}) => {
    const [inputvalues,setInputValues] = useState(initialState)

    const resetForm = () => {
     setInputValues(initialState)
    }

    const handleInputChange  = ({target}) => {
      setInputValues({
        ...inputvalues,
        [target.name] :target.value
      })
    } 
    const setForm = (newValues) => {
      setInputValues(newValues)
    }

    return{
      inputvalues,
      handleInputChange,
      resetForm,
      setForm
    }
   
}

export default useForm