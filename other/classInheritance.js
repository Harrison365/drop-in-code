class Pokemon {
  constructor(name, type = "normal", move) {
    this.name = name;
    this.move = move;
    this.type = type;
  }
}

class Fire extends Pokemon {
  constructor(name, type, move) {
    super(name, "fire", move);
  }
}

console.log(new Fire("h", undefined, "tackle"));
console.log(new Pokemon("h", undefined, "tackle"));
