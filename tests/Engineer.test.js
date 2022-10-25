const Engineer = require("../lib/Engineer");
test("Engineer set of test", () => {
  const fakename = new Engineer("Fred", "3", "fred@gmail.com", "fredgithub");
  expect(fakename.github).toBe("fredgithub");
  expect(fakename.getGithub()).toBe("fredgithub");
  expect(typeof fakename).toBe("object");
  expect(fakename.getRole()).toBe("Engineer");
});
