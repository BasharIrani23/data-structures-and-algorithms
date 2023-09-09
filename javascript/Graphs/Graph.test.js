const Graphs = require("./Graph");

describe("Graphs", () => {
  let graph;

  beforeEach(() => {
    graph = new Graphs();
  });

  it("should add vertices successfully", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    const vertices = graph.getAllVertices();
    expect(vertices).toEqual(["A", "B"]);
  });

  it("should add an edge successfully", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B", 10);
    const neighbors = graph.getNeighbors("A");
    expect(neighbors).toEqual([{ vertex: "B", weight: 10 }]);
  });

  it("should retrieve appropriate neighbors with weights", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addEdge("A", "B", 10);
    const neighbors = graph.getNeighbors("A");
    expect(neighbors).toEqual([{ vertex: "B", weight: 10 }]);
  });

  it("should return the proper size of the graph", () => {
    graph.addVertex("A");
    graph.addVertex("B");
    const size = graph.size();
    expect(size).toBe(2);
  });

  it("should handle a graph with only one vertex and edge", () => {
    graph.addVertex("A");
    graph.addEdge("A", "A", 5);
    const vertices = graph.getAllVertices();
    const neighbors = graph.getNeighbors("A");
    expect(vertices).toEqual(["A"]);
    expect(neighbors).toEqual([{ vertex: "A", weight: 5 }]);
    const size = graph.size();
    expect(size).toBe(1);
  });

  it("should not allow adding an edge if one of the vertices does not exist", () => {
    graph.addVertex("A");
    expect(() => {
      graph.addEdge("A", "C", 10);
    }).toThrow("Both vertices should be in the graph");
  });

  it("should return empty neighbors for a vertex that does not exist", () => {
    const neighbors = graph.getNeighbors("Z");
    expect(neighbors).toEqual([]);
  });

  it("should handle an empty graph", () => {
    const vertices = graph.getAllVertices();
    const size = graph.size();
    expect(vertices).toEqual([]);
    expect(size).toBe(0);
  });
});
