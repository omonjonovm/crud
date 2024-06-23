import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useForm from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { getEmployeeById } from '../service/localStorage';
import { addEmployee, editEmployee } from '../toolkit/Slicer'; 

const Form = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { inputvalues, handleInputChange, resetForm, setForm } = useForm({
    name: "",
    email: "",
    gender: "",
    phone: "",
  });

  useEffect(() => {
    if (id) {
      const employee = getEmployeeById(id);
      if (employee) {
        setForm(employee);
      }
    }
  }, [id, setForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editEmployee({ id, updateEmployee: inputvalues }));
    } else {
      dispatch(addEmployee(inputvalues));
    }
    resetForm();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div>
      <div className="d-flex my-5 justify-content-between">
        <button className='btn btn-outline-secondary' onClick={() => navigate("/")}>Back</button>
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
            <label className='form-label mt-2' htmlFor="gender">Gender</label>
            <select
              id='gender'
              name='gender'
              value={inputvalues.gender}
              onChange={handleInputChange}
              className='form-select'
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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
            <button type='submit' className='btn btn-outline-primary'>{id ? 'Update' : 'Add'} Employee</button>
          </div>
        </form>
      </div>

      {showAlert && (
        <div className="px-5">
          <div className="alert alert-success text-white" role='alert'>
            Well done! {id ? "Updated" : "Added"} a new employee
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
