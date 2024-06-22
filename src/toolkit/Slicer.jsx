import { createSlice } from "@reduxjs/toolkit";
import { getList, addEmployee as addEmployeeLS, editEmployee as editEmployeeLS, deleteEmployee as deleteEmployeeLS } from "../service/localStorage";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  employees: getList(),
};

const slice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      const newEmployee = { id: uuidv4(), ...action.payload };
      addEmployeeLS(newEmployee);
      state.employees.push(newEmployee);
    },
    editEmployee: (state, action) => {
      const { id, updateEmployee } = action.payload;
      editEmployeeLS(id, updateEmployee);
      state.employees = state.employees.map(emp =>
        emp.id === id ? { ...emp, ...updateEmployee } : emp
      );
    },
    deleteEmployee: (state, action) => {
      deleteEmployeeLS(action.payload);
      state.employees = state.employees.filter(emp => emp.id !== action.payload);
    },
  },
});

export const { addEmployee, editEmployee, deleteEmployee } = slice.actions;
export default slice.reducer;
