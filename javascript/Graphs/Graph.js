"use strict";

const Vertex = require("./Vertex");
const Edge = require("./Edge");

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    this.adjList.set(vertex, []);
    return vertex;
  }

  addEdge(start, end, weight) {
    if (!this.adjList.has(start) || !this.adjList.has(end)) {
      throw new Error("Both vertices should be in the graph");
    }
    const startAdjacency = this.adjList.get(start);
    const edge = new Edge(end, weight);
    startAdjacency.push(edge);
  }
  getAllVertices() {
    return Array.from(this.adjList.keys());
  }

  getNeighbors(vertex) {
    if (!this.adjList.has(vertex)) {
      console.log("Vertex not found");
      return [];
    }

    return this.adjList.get(vertex);
  }

  size() {
    return this.adjList.size;
  }
}

const vertice1 = new Vertex(1);
const vertice2 = new Vertex(2);
const vertice3 = new Vertex(3);

const graph = new Graph();
graph.addVertex(vertice1);
graph.addVertex(vertice2);
graph.addVertex(vertice3);
graph.addEdge(vertice1, vertice3, 4);
console.log(graph.getNeighbors(vertice1));

module.exports = Graph;
