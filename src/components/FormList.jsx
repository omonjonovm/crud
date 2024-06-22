import { useEffect, useState } from 'react'
import Item from './Item'
import { getList } from '../service/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import { deleteEmployee } from '../toolkit/Slicer'

const FormList = () => {
  const [employes, setEmployes] = useState([])
  const dispatch = useDispatch();
  const employees = useSelector(state =>  state.employees)

  useEffect(() => {
    setEmployes(getList())
  }, [dispatch])
  const handleDelete = (id) => {
    dispatch(deleteEmployee(id))
  }
  return (
    <div>
      <h1 className='my-5 text-center'>Manage Employe</h1>

      {
        employes.length > 0 ? (
          <div className="card bg-secondary p-3">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employes.map(employee =>
                  <Item
                    employee={employee}
                    onDelete={handleDelete}
                    key={employee.id}
                    setEmployes={setEmployes}
                  />)}
              </tbody>
            </table>
          </div>
        ) : (
          <h3 className="text-center">No employes yet</h3>
        )
      }

    </div>
  )
}

export default FormList