//using Engineer constructor

const Engineer = require('../lib/Engineer.js');


//creating engineer object
//test('creates an Engineer object',  () => {
  //  const engineer = new Engineer();
    //expect(engineer.github) .toEqual(expect.any(String));

//});
//gets github from getGithub()
//test('gets engineer github value', () => {
  //  const engineer = new Engineer();
    //expect(engineer.getgithub()).toEqual(expect.stringContaining(engineer.github.toString()));
//});


//gets role from getRole()
//test('gets role of employee' , () => {
  //  const engineer = new Engineer ();
    //expect(engineer.getRole()).toEqual("Engineer");

//});

//
//}
test("creates an Engineer object", () => {
  const engineer = new Engineer()
  expect(typeof(engineer)).toEqual("object");
});  

test("Engineer object has a valid name", () => {
  const engineer = new Engineer()
    
    expect(engineer.getName()).toEqual(engineer.name);
});

test("Engineer Object has a valid id", () => {
  const engineer = new Engineer()
  
  expect(engineer.getId()).toEqual(engineer.id);
});


test("Engineer object has a valid email" , () => {
  const engineer = new Engineer()
    
    expect(engineer.getEmail()).toEqual(engineer.email);
}); 


test( 'engineer object has a valid role' , () => {
  const engineer = new Engineer();
    expect(engineer.getRole()).toEqual("Engineer");
    
});
test('engineer has a valid  github' , () => {
  const engineer = new Engineer ('bob','1', 'acb@email','github');
  expect(engineer.getGithub()).toEqual(engineer.github);
});
 
module.export = {
    Engineer}