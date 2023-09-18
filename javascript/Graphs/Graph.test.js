const Graphs = require("./Graph");
const Vertex = require("./Vertex");

describe("Graphs", () => {
  let graph;

  beforeEach(() => {
    graph = new Graphs();
  });

  it("should add vertices successfully", () => {
    const A = new Vertex("A");
    const B = new Vertex("B");
    graph.addVertex(A);
    graph.addVertex(B);
    const vertices = graph.getAllVertices();
    expect(vertices.map((v) => v.value)).toEqual(["A", "B"]);
  });

  it("should add an edge successfully", () => {
    const A = new Vertex("A");
    const B = new Vertex("B");
    graph.addVertex(A);
    graph.addVertex(B);
    graph.addEdge(A, B, 10);
    const neighbors = graph.getNeighbors(A);
    expect(neighbors).toEqual([{ vertex: B, weight: 10 }]);
  });

  it("should retrieve appropriate neighbors with weights", () => {
    const A = new Vertex("A");
    const B = new Vertex("B");
    graph.addVertex(A);
    graph.addVertex(B);
    graph.addEdge(A, B, 10);
    const neighbors = graph.getNeighbors(A);
    expect(neighbors).toEqual([{ vertex: B, weight: 10 }]);
  });

  it("should return the proper size of the graph", () => {
    const A = new Vertex("A");
    const B = new Vertex("B");
    graph.addVertex(A);
    graph.addVertex(B);
    const size = graph.size();
    expect(size).toBe(2);
  });

  it("should handle a graph with only one vertex and edge", () => {
    const A = new Vertex("A");
    graph.addVertex(A);
    graph.addEdge(A, A, 5);
    const vertices = graph.getAllVertices();
    const neighbors = graph.getNeighbors(A);
    expect(vertices.map((v) => v.value)).toEqual(["A"]);
    expect(neighbors).toEqual([{ vertex: A, weight: 5 }]);
    const size = graph.size();
    expect(size).toBe(1);
  });

  it("should not allow adding an edge if one of the vertices does not exist", () => {
    const A = new Vertex("A");
    const C = new Vertex("C");
    graph.addVertex(A);
    expect(() => {
      graph.addEdge(A, C, 10);
    }).toThrow("Both vertices should be in the graph");
  });

  it("should return empty neighbors for a vertex that does not exist", () => {
    const Z = new Vertex("Z");
    const neighbors = graph.getNeighbors(Z);
    expect(neighbors).toEqual([]);
  });

  it("should handle an empty graph", () => {
    const vertices = graph.getAllVertices();
    const size = graph.size();
    expect(vertices).toEqual([]);
    expect(size).toBe(0);
  });

  it("should perform breadth-first traversal correctly", () => {
    const A = new Vertex("A");
    const B = new Vertex("B");
    const C = new Vertex("C");
    const D = new Vertex("D");

    graph.addVertex(A);
    graph.addVertex(B);
    graph.addVertex(C);
    graph.addVertex(D);

    graph.addEdge(A, B, 1);
    graph.addEdge(B, C, 2);
    graph.addEdge(C, D, 3);
    graph.addEdge(D, A, 4);

    const result = graph.breadthFirst(A);
    expect(result.map((v) => v.value)).toEqual(["A", "B", "C", "D"]);

    const resultFromD = graph.breadthFirst(D);
    expect(resultFromD.map((v) => v.value)).toEqual(["D", "A", "B", "C"]);
  });

  it("should handle breadth-first traversal for isolated vertices", () => {
    const E = new Vertex("E");
    graph.addVertex(E);

    const result = graph.breadthFirst(E);
    expect(result.map((v) => v.value)).toEqual(["E"]);
  });
  it("should calculate business trip cost correctly", () => {
    const Metroville = new Vertex("Metroville");
    const Pandora = new Vertex("Pandora");
    const Arendelle = new Vertex("Arendelle");
    const NewMonstropolis = new Vertex("New Monstropolis");
    const Naboo = new Vertex("Naboo");
    const Narnia = new Vertex("Narnia");

    graph.addVertex(Metroville);
    graph.addVertex(Pandora);
    graph.addVertex(Arendelle);
    graph.addVertex(NewMonstropolis);
    graph.addVertex(Naboo);
    graph.addVertex(Narnia);

    graph.addEdge(Metroville, Pandora, 82);
    graph.addEdge(Arendelle, NewMonstropolis, 42);
    graph.addEdge(NewMonstropolis, Naboo, 73);

    expect(graph.businessTrip([Metroville, Pandora])).toBe("$82");
    expect(graph.businessTrip([Arendelle, NewMonstropolis, Naboo])).toBe(
      "$115"
    );
    expect(graph.businessTrip([Naboo, Pandora])).toBeNull();
    expect(graph.businessTrip([Narnia, Arendelle, Naboo])).toBeNull();
  });
});
