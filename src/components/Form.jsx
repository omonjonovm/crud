import  { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { addEmploye, getEmployeeById ,editEmployee } from '../service/localStorage';

const Form = () => {
  const navigate = useNavigate();
  const {id} = useParams(useForm)
  const [showAlert,setShowAlert] = useState(false)
  const { inputvalues, handleInputChange, resetForm , setForm } = useForm({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  useEffect(() => {
    if(id) {
      const employee = getEmployeeById(id);
      setForm(employee)
    }
  },[id])

  const handleSubmit = (e) => {
    e.preventDefault();
   id ? editEmployee(id,inputvalues) : addEmploye(inputvalues);
    resetForm();
    setTimeout(() => {
      setShowAlert(true)
    },2000)
  };

  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
        <button className='btn btn-outline-secondary' onClick={() => navigate("/")} >Back</button>
        <h1>{id ? "Edit" : "Create"} Employee</h1>
      </div>

      <div className="card border-primary p-5 m-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='form-label mt-2' htmlFor="name">Name</label>
            <input
              id='name'
              name='name'
              type="text"
              value={inputvalues.name}
              onChange={handleInputChange}
              className='form-control'
              placeholder='Enter name'
            />
          </div>

          <div className="form-group">
            <label className='form-label mt-2' htmlFor="email">Email</label>
            <input
              id='email'
              type="email"
              name='email'
              value={inputvalues.email}
              onChange={handleInputChange}
              className='form-control'
              placeholder='Enter your email'
            />
          </div>

          <div className="form-group">
            <label className='form-label mt-2' htmlFor="address">Address</label>
            <input
              id='address'
              type="text"
              name='address'
              value={inputvalues.address}
              onChange={handleInputChange}
              className='form-control'
              placeholder='Address'
            />
          </div>

          <div className="form-group">
            <label className='form-label mt-2' htmlFor="phone">Phone</label>
            <input
              id='phone'
              type="tel"
              name='phone'
              value={inputvalues.phone}
              onChange={handleInputChange}
              className='form-control'
              placeholder='Phone'
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type='submit' className='btn btn-outline-primary'>Send</button>
          </div>
        </form>
      </div>

      {
        showAlert && (
          <div className="px-5">
            <div className="alert alert-success text-white" role='alert'>
              Well done! added a new emplyee
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Form;
