// Write your solution in this file!

const employee = {
    name:"Melanie",
    streetAddress:"Nairobi",
}


//non destructively update employee
function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

//destructively update employee
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value; 

  return obj;
}

//Non-destructively delete
function deleteFromEmployeeByKey(obj, key, value){
    const newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee
}

//Destructively delete
function destructivelyDeleteFromEmployeeByKey(Obj, key) {
  delete Obj[key]; 
  return employee;
}