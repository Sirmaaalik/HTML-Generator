//importing Employee constructor
const Employee = require('./Employee.js');

//manager constructor extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //calling employee constructor
        super (name,id, email);

        this.officeNumber = officeNumber;

    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
     }

     getEmail ()  {
        return this.email;
    }

    //override employee role to manager 
    getRole () {
        return "Manager";
    
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
}
//to be exported 
module.exports = Manager;