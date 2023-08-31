const { Hash, Node } = require("./Hash_table");

describe("Hash table tests", () => {
  it("Setting a key/value to your hashtable results in the value being in the data structure", () => {
    const newHash = new Hash(19);
    newHash.set("Bashar", "Irani");
    expect(newHash.map[15].head.value["Bashar"]).toBe("Irani");
  });

  it("Retrieving based on a key returns the value stored", () => {
    const newHash = new Hash(19);
    newHash.set("Bashar", "Irani");
    expect(newHash.get("Bashar").head).toEqual(
      new Node({ Bashar: "Irani" }, null)
    );
  });

  it("Successfully returns undefined for a key that does not exist in the hashtable", () => {
    const newHash = new Hash(19);
    newHash.set("Bashar", "Irani");
    expect(newHash.get("anyThing")).toEqual(undefined);
  });

  it("Successfully returns a list of all unique keys that exist in the hashtable", () => {
    const newHash = new Hash(19);
    newHash.set("Bashar", "Irani");
    newHash.set("Ahmad", "Hany");
    expect(newHash.keys()).toEqual(["Ahmad", "Bashar"]);
  });

  it("Successfully handle a collision within the hashtable", () => {
    const newHash = new Hash(19);
    newHash.set("Bashar", "Irani");
    newHash.set("Bashar", "Irani");
    let match = new Node(
      { Bashar: "Irani" },
      new Node({ Bashar: "Irani" }, null)
    );
    expect(newHash.get("Bashar").head).toEqual(match);
  });

  it("Successfully retrieve a value from a bucket within the hashtable that has a collision", () => {
    const newHash = new Hash(19);
    newHash.set("Bashar", "Irani");
    newHash.set("Bashar", "Irani");
    expect(newHash.has("Bashar")).toEqual(true);
  });

  it("Successfully hash a key to an in-range value", () => {
    const newHash = new Hash(19);
    const hashValue = newHash.hash("Bashar");
    expect(hashValue).toBeLessThan(newHash.size);
    expect(hashValue).toBeGreaterThanOrEqual(0);
  });
});
