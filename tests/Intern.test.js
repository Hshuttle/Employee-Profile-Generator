const Intern = require("../lib/Intern");
test("Intern set of test", () => {
  const fakename = new Intern("Fred", "3", "fred@gmail.com", "College");
  expect(fakename.school).toBe("College");
  expect(fakename.getSchool()).toBe("College");
  expect(typeof fakename).toBe("object");
  expect(fakename.getRole()).toBe("Intern");
});
