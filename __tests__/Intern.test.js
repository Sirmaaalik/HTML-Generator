//using intern constructor

const Intern = require('../lib/Intern.js');

//creating intern object
test('creates an  intern object' , () => {
    const intern = new Intern();
    expect(typeof(intern)).toEqual("object");
});

test("Intern object has a valid name", () => {
    const intern = new Intern()
      
      expect(intern.getName()).toEqual(intern.name);
  });

  test("Intern Object has a valid id", () => {
    const intern = new Intern()
    
    expect(intern.getId()).toEqual(intern.id);
  });

  test("Intern object has a valid email" , () => {
    const intern = new Intern()
      
      expect(intern.getEmail()).toEqual(intern.email);
  }); 
  





//gets school from getSchool()
test('gets employee school', () => {
    const intern = new Intern ('bob',1,'acb@mail.com','university');
    expect(intern.getSchool()).toEqual('university');
});

//gets role form getRole()
test('gets role of employee' , () => {
    const intern = new Intern ('Catherine');
    expect(intern.getRole()).toEqual("Intern");

});
module.exports = {
    Intern
}
