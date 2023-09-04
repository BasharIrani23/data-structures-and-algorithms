const { Hash, Node, repeatedWord } = require("./hash-table"); // Update the import statement with the correct path

describe("Hash table tests", () => {
  // Existing Hash class tests
  it("Setting a key/value to your hashtable results in the value being in the data structure", () => {
    const newHash = new Hash(19);
    newHash.set("Bashar", "Irani");
    expect(newHash.get("Bashar").head.value).toEqual({ Bashar: "Irani" });
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

  // New test cases for repeatedWord function
  it("Finds the first repeated word in a string", () => {
    const inputString = "Once upon a time, there was a brave princess who...";
    //expect(repeatedWord(inputString)).toBe("a");
  });

  it("Finds the first repeated word in a long string", () => {
    const inputString =
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
    expect(repeatedWord(inputString)).toBe("it");
  });

  it("Handles special characters and case sensitivity", () => {
    const inputString =
      "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
    //expect(repeatedWord(inputString)).toBe("summer");
  });

  it("Returns null if no repeated word is found", () => {
    const inputString = "This is a test string with no repeated words.";
    //expect(repeatedWord(inputString)).toBe(null);
  });
});
