const UserController = require("./user-controller.js");
const User = require("./user.js");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('add user to userController', () => {    
    let user = new User(1994,"Brandon", "brandon@generation.org");
    expect(userController.getUsers()).not.toContain(user);
    userController.add(user);
  });

test('remove user to userController', () => {    
    let user = new User(8999,"Clara", "clara@generation.org");
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
  });

test('find user by email', () => {  
    let user = new User(1994,"Brandon", "brandon@generation.org"); 
    userController.add(user); 
    expect(userController.findByEmail("brandon@generation.org")).toEqual(user);
  });

  
  test('find user by email', () => {  
    let user = new User(1994,"Brandon", "brandon@generation.org"); 
    userController.add(user); 
    expect(userController.findByEmail("brandon@generation.org")).toEqual(user);
  });

  test('find user by email', () => {  
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findByEmail("santiago@generation.org")).toEqual(user);
    expect(userController.findByEmail("santiagomcb@generation.org")).toBeUndefined();
  });

 test('find user by ID', () => {  
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findById(1234)).toEqual(user);
  });

   test('find user by ID', () => {  
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.findById(1234)).toEqual(user);
    expect(userController.findById(2222)).toBeUndefined();
  });