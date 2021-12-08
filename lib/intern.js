//importing Employee constructor

const Employee = require('./Employee.js');

//intern constructor extneds employee constructor
class Intern extends Employee {
    constructor (name,id, email,school) {

        //calling employee constructor
        super (name,id,email);

        this.school = school;

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






  //returning school from input

getSchool () {
    return this.school;

}
//override employee role to intern

getRole () {
    return "Intern";
}

}

//to be exported 
module.exports = Intern;