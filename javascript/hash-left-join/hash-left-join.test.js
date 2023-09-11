const { HashMap, left_join } = require("./hash-left-join");

describe("Hash table tests", () => {
  it("Should perform left join on two hash maps correctly", () => {
    let map1 = new HashMap(10);
    let map2 = new HashMap(10);

    map1.set("hardworking", "busy");
    map1.set("loving", "smitten");
    map1.set("leader", "conductor");
    map1.set("clothing", "attire");
    map1.set("rage", "fury");

    map2.set("loving", "indifferent");
    map2.set("hardworking", "lazy");
    map2.set("leader", "follower");
    map2.set("rage", "joy");
    map2.set("run", "halt");

    let result = left_join(map1, map2);

    let expectedValue = [
      ["rage", "fury", "joy"],
      ["hardworking", "busy", "lazy"],
      ["clothing", "attire", null],
      ["leader", "conductor", "follower"],
      ["loving", "smitten", "indifferent"],
    ];

    // Check if both arrays contain the same elements, regardless of order
    expect(result.sort()).toEqual(expectedValue.sort());
  });
});
