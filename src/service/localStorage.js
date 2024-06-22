import uuid from "react-uuid";

export const getList = () => {
  if (!localStorage["@employes"]) {
    localStorage["@employes"] = JSON.stringify([]);
  }
  let employes = JSON.parse(localStorage["@employes"])
  return employes
}

export const getEmployeeById = (id) => {
  const employes = getList();
  const epmloyee = employes.find(epmloyee => epmloyee.id === id);
  return epmloyee;
}



export const addEmploye = (epmloyee) => {
  const employes = getList();
  employes.push({ id: uuid(), ...epmloyee });
  localStorage["@employes"] = JSON.stringify(employes)
}

export const editEmployee = (id,newEpmloyee) => {
  let employes = getList();
  employes = employes.filter((employe) => employe.id !== id);
  employes.push(newEpmloyee);
  localStorage["@employes"] = JSON.stringify(employes )
}

export const deleteEmployee = (id) => {
  let employes = getList();
  employes = employes.filter((epmloyee) =>epmloyee.id !== id)
  localStorage["@employes"] = JSON.stringify(employes)
}