//using Employee constructor

const Employee = require('../lib/Employee.js');
const employee = new Employee('Bob', 1, "Bobtest.com");






test("creates an employee object", () => {
    expect(typeof(employee)).toEqual("object");
});  

test("Employee object has a valid name", () => {
    expect(employee.name).toBe("Bob");
    expect(employee.getName()).toEqual(employee.name);
});

test("Employee Object has a valid id", () => {


    expect(employee.id).toBe(1);

    expect(employee.getId()).toEqual(employee.id);
});


test("Employee object has a valid email" , () => {
    expect(employee.email).toBe("Bobtest.com");
    expect(employee.getEmail()).toEqual(employee.email);
}); 


test( "Employee object has a valid role" , () => {
    expect(employee.getRole()).toEqual("Employee");
    
});
module.exports = {
    Employee
}
