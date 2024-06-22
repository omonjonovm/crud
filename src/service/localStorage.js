import { v4 as uuidv4 } from 'uuid';

export const getList = () => {
  if (!localStorage["@employees"]) {
    localStorage["@employees"] = JSON.stringify([]);
  }
  return JSON.parse(localStorage["@employees"]);
};

export const getEmployeeById = (id) => {
  const employees = getList();
  return employees.find(employee => employee.id === id);
};

export const addEmployee = (employee) => {
  const employees = getList();
  const newEmployee = { id: uuidv4(), ...employee };
  employees.push(newEmployee);
  localStorage["@employees"] = JSON.stringify(employees);
};

export const editEmployee = (id, updatedEmployee) => {
  let employees = getList();
  employees = employees.map(employee =>
    employee.id === id ? { ...employee, ...updatedEmployee } : employee
  );
  localStorage["@employees"] = JSON.stringify(employees);
};

export const deleteEmployee = (id) => {
  let employees = getList();
  employees = employees.filter(employee => employee.id !== id);
  localStorage["@employees"] = JSON.stringify(employees);
};
