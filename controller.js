const db = require('./db');

const allEmployees = (req, res) => {
    res.json(db.allEmployees());
};

const oneEmployee = (req, res) => {
    res.json(db.employeeById(req.params.id));
};

const listIds = (req, res) => {
    res.json(db.employeeIdList());
};

const searchEmployees = (req, res) => {
    res.json(db.employeesByName(req.params.searchTerm));
};

module.exports = {
    allEmployees,
    listIds,
    oneEmployee,
    searchEmployees
};
