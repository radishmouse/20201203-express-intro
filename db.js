const employees = require('./employees.json');


const allEmployees = () => employees; // Just return the whole shebang

const employeeById = id => employees[id]; // If not found, this return undefined

const employeeIdList = () => {
    const keys = Object.keys(employees);
    // need parens b/c the curly braces would confuse JS
    return keys.map(k => ({
        id: k,
        firstName: employees[k].firstName,
        lastName: employees[k].lastName,
    }))
};

const employeesByName = (name) => {
    name = name.toLowerCase();

    // We need an array!
    const emps = Object.values(employees);
    
    // Search by last name
    let matches1 = emps.filter(e => e.lastName.toLowerCase().includes(name));
    
    // Search by first name
    let matches2 = emps.filter(e => e.firstName.toLowerCase().includes(name));

    return [
        ...matches1,
        ...matches2
    ]
}

module.exports = {
    allEmployees,
    employeeById,
    employeesByName,
    employeeIdList
};
