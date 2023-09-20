"use strict";

const Vertex = require("./Vertex");
const Edge = require("./Edge");

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(src, dest, weight) {
    if (!this.adjList.has(src) || !this.adjList.has(dest)) {
      throw new Error("Both vertices should be in the graph");
    }
    const edge = new Edge(dest, weight);
    this.adjList.get(src).push(edge);
  }

  getNeighbors(vertex) {
    return this.adjList.get(vertex) || [];
  }

  getAllVertices() {
    return Array.from(this.adjList.keys());
  }

  size() {
    return this.adjList.size;
  }

  breadthFirst(startVertex) {
    if (!this.adjList.has(startVertex)) {
      console.log("Vertex not found");
      return [];
    }

    let visited = new Set();
    let queue = [startVertex];
    let result = [];

    while (queue.length > 0) {
      let current = queue.shift();

      if (!visited.has(current)) {
        visited.add(current);
        result.push(current);

        let neighbors = this.getNeighbors(current);
        for (let edge of neighbors) {
          if (!visited.has(edge.vertex)) {
            queue.push(edge.vertex);
          }
        }
      }
    }

    console.log(result.map((v) => v.value)); // Display the values of visited vertices
    return result;
  }

  businessTrip(cityNames) {
    let totalCost = 0;

    for (let i = 0; i < cityNames.length - 1; i++) {
      let currentCity = cityNames[i];
      let nextCity = cityNames[i + 1];
      let neighbors = this.getNeighbors(currentCity);

      let pathFound = false;
      for (let edge of neighbors) {
        if (edge.vertex === nextCity) {
          totalCost += edge.weight;
          pathFound = true;
          break;
        }
      }

      if (!pathFound) return null;
    }

    return `$${totalCost}`;
  }
  depthFirst(startVertex) {
    if (!this.adjList.has(startVertex)) {
      console.log("Vertex not found");
      return [];
    }

    let visited = new Set();
    let result = [];

    const dfs = (vertex) => {
      if (visited.has(vertex)) return;

      visited.add(vertex);
      result.push(vertex);

      let neighbors = this.getNeighbors(vertex);
      for (let edge of neighbors) {
        dfs(edge.vertex);
      }
    };

    dfs(startVertex);

    console.log(result.map((v) => v.value));
    return result;
  }
}

module.exports = Graph;
