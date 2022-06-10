const c = require("./challenge");

describe("isNumberPositive", function () {
  test("Negative Numbers", function () {
    expect(c.isNumberPositive(-1)).toEqual(false);
  });
  test("Positive Numbers", function () {
    expect(c.isNumberPositive(10)).toEqual(true);
  });
});

describe("convertDaysToAge", function () {
  test("Test 1", function () {
    expect(c.convertDaysToAge(3650)).toEqual(10);
  });
  test("Test 2", function () {
    expect(c.convertDaysToAge(6570)).toEqual(18);
  });
});

describe("getLargestNumber", function () {
  test("2,1,4", function () {
    expect(c.getLargestNumber([2, 1, 4])).toEqual(4);
  });

  test("6,2,3", function () {
    expect(c.getLargestNumber([6, 2, 3])).toEqual(6);
  });
});

describe("getLastName", function () {
  test("Charlie Rob Andy", function () {
    expect(c.getLastName(["Charlie", "Rob", "Andy"])).toEqual("Andy");
  });

  test("Ash Stu", function () {
    expect(c.getLastName(["Ash", "Stu"])).toEqual("Stu");
  });
});

describe("allNumbersPositive", function () {
  test("2,4,5", function () {
    expect(c.allNumbersPositive([2, 4, 5])).toEqual(true);
  });

  test("-5,4,6", function () {
    expect(c.allNumbersPositive([-5, 5, 6])).toEqual(false);
  });

  test("0,0,0", function () {
    expect(c.allNumbersPositive([0, 0, 0, -1])).toEqual(false);
  });
});
