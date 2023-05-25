const config = require ('./dbConfig'), sql = require('mssql');
    
const getEmployees = async () => {
    try {
        let pool = await sql.connect(config);
        let employees = pool.request().query("SELECT * FROM HR.Employees")
        console.log(employees); 
        return employees;
    }
    catch(error){
        console.log(error);

    }
}

const createEmployee = async (Employee) => {
    try {
        let pool = await sql.connect(config);
        let employees = pool.request()
        .query(`INSERT INTO HR.Employees VALUES
        ('${Employee.Lastname}', '${Employee.Firstname}', '${Employee.Title}', '${Employee.Titleofcourtesy}', '${Employee.Birthdate}', '${Employee.Hiredate}', '${Employee.Address}',
            '${Employee.City}', '${Employee.Region}', ${Employee.Postalcode}, '${Employee.Country}', ${Employee.Phone}, ${Employee.MgrID})
        `)
        return employees;
    }
    catch(error){
        console.log(error);

    }
}

module.exports = {
    getEmployees,
    createEmployee
}
