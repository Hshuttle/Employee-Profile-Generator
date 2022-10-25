const Manager = require("../lib/Manager");
test("Intern set of test", () => {
  const fakename = new Manager("Fred", "3", "fred@gmail.com", "888");
  expect(fakename.phone).toBe("888");
  expect(fakename.getPhone()).toBe("888");
  expect(typeof fakename).toBe("object");
  expect(fakename.getRole()).toBe("Manager");
});
