const { response } = require('express');
const express = require('express'),
    Employee = require('./dbFiles/employee'),
    dbOperation = require('./dbFiles/dbOperation'),
    cors = require('cors');


/* const express = require('express'),
    cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/api', function(req, res) {
    console.log('Called');
    res.send({result: 'Hello'})
})

app.get('/quit', function(req, res) {
    console.log('Called quit');
    res.send({result: 'Bye'})
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`)); */

/* dbOperation.getEmployees().then(res =>{
    console.log(res.recordset);
})
 */
let nuevo = new Employee('Araya', 'Andres', 'Ing', 'Mr', '1993-08-08', '2017-03-01', 'Grecia', 'Grecia', 'Alajuela', '20302', 'CR', 1233, 10)
dbOperation.createEmployee(nuevo);
