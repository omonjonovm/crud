import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteEmployee, getList } from '../service/localStorage';

const Item = ({ employee ,setEmployes }) => {
  const { id, name, email, address, phone } = employee;
  const navigate = useNavigate()
  const removeEmployee = () => {
    deleteEmployee(id);
    setEmployes(getList())
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{phone}</td>
      <td>
        <div className="d-flex gap-3">
          <span role='button' className='badge bg-success' onClick={() => navigate(`/edit/${id}`)} >
            Edit
          </span>
          <span role='button' className='badge bg-danger'onClick={() => removeEmployee()} >
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};

export default Item;
