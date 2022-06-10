const hello = require("./challenge");

describe("Nology Pre-Course JS Challenge", function () {
  test("Hello", function () {
    expect(hello()).toEqual("hello world");
  });
});
