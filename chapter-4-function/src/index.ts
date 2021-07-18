function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string) {
  return 'hello ' + name;
}

let greet2 = function (name: string) {
  return 'hello ' + name;
};

let greet3 = (name: string) => {
  return 'hello ' + name;
};

let greet4 = (name: string) => 'hello ' + name;

add(1, 2); // 3
greet('crystal'); // hello crystal

// add(1);
// add(1 + 'a');
