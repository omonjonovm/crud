import { useEffect, useState } from 'react'
import Item from './Item'
import { getList } from '../service/localStorage'

const FormList = () => {
  const [employes, setEmployes] = useState([])

  useEffect(() => {
    setEmployes(getList())
  }, [])
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
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employes.map(employee =>
                  <Item
                    employee={employee}
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