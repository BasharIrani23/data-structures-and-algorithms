class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(animal) {
    if (animal.species === "dog" || animal.species === "cat") {
      if (!this.front) {
        this.front = animal;
        this.rear = animal;
      } else {
        this.rear.next = animal;
        this.rear = animal;
      }
    }
  }

  dequeue(pref) {
    if (pref === "dog" || pref === "cat") {
      if (!this.front) {
        return null;
      }

      const animal = this.front;
      this.front = this.front.next;

      if (!this.front) {
        this.rear = null;
      }

      if (animal.species === pref) {
        return animal;
      } else {
        const temp = animal;
        let prev = null;

        while (temp && temp.species !== pref) {
          prev = temp;
          temp = temp.next;
        }

        if (!temp) {
          return null;
        }

        prev.next = temp.next;

        if (!prev.next) {
          this.rear = prev;
        }

        return temp;
      }
    }

    return null;
  }
}
