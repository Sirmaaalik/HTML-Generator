//importing Employee Constructor
const Employee = require("./Employee.js");

//Engineer Constructor extends employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {

        //calling employee constructor 
    
         
        //returning github from input
        super (name,id, email);

        this.github = github;

        
    } 
     //Override employee role to engineer
    getRole () {
        return "Engineer";
    }
    getGithub () {
        return this.github;
    }
}
//to be exported
module.exports = Engineer;