// service/localStorage.js

export const getList = () => {
  return JSON.parse(localStorage.getItem('employees')) || [];
};

export const getEmployeeById = (id) => {
  const employees = getList();
  return employees.find(emp => emp.id === id);
};

export const addEmployee = (employee) => {
  const employees = getList();
  employees.push(employee);
  localStorage.setItem('employees', JSON.stringify(employees));
};

export const editEmployee = (id, updateEmployee) => {
  const employees = getList();
  const index = employees.findIndex(emp => emp.id === id);
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updateEmployee };
    localStorage.setItem('employees', JSON.stringify(employees));
  }
};

export const deleteEmployee = (id) => {
  const employees = getList();
  const updatedEmployees = employees.filter(emp => emp.id !== id);
  localStorage.setItem('employees', JSON.stringify(updatedEmployees));
};
