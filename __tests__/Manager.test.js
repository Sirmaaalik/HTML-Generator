//using Manager constructor

const Manager = require('../lib/Manager.js');






//creating manager object
test('creates a Manager object' ,() => {
    const manager = new Manager ();
    expect(typeof(manager)).toEqual('object');
});
test("Manager object has a valid name", () => {
    const manager = new Manager()
      
      expect(manager.getName()).toEqual(manager.name);
  });
  test("Manager Object has a valid id", () => {
    const manager = new Manager()
    
    expect(manager.getId()).toEqual(manager.id);
  });

  test("Manager object has a valid email" , () => {
    const manager = new Manager()
      
      expect(manager.getEmail()).toEqual(manager.email);
  }); 
  
  



//gets role form getRole()
test('gets role of employee' ,() => {
    const manager = new Manager ('Catherine');
    expect(manager.getRole()).toEqual("Manager");
});
test( 'gets officeNumber of Manager' , () => {
    const manager = new Manager ();
    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

module.exports = {
    Manager
}