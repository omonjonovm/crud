
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ employee, onDelete }) => {
  const { id, name, email, gender, phone } = employee;
  const navigate = useNavigate();

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{gender}</td>
      <td>{phone}</td>
      <td>
        <div className="d-flex gap-3">
          <span role="button" className="badge bg-success" onClick={() => navigate(`/edit/${id}`)}>
            Edit
          </span>
          <span role="button" className="badge bg-danger" onClick={() => onDelete(id)}>
            Delete
          </span>
        </div>
      </td>
    </tr>
  );
};

export default Item;
