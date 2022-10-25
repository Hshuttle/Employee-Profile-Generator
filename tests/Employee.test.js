const Employee = require("../lib/Employee");
test("employee set of test", () => {
  const fakename = new Employee("Fred", "3", "fred@gmail.com");
  expect(fakename.name).toBe("Fred");
  expect(fakename.getName()).toBe("Fred");
  expect(fakename.id).toBe("3");
  expect(fakename.getId()).toBe("3");
  expect(fakename.email).toBe("fred@gmail.com");
  expect(fakename.getEmail()).toBe("fred@gmail.com");
  expect(typeof fakename).toBe("object");
  expect(fakename.getRole()).toBe("Employee");
});
