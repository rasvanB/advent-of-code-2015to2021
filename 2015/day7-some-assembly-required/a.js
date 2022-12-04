const input = Deno.readTextFileSync("input.txt").split("\r\n");

const wires = new Map();

const tryCast = (value) => {
  return !isNaN(Number(value)) ? Number(value) : value;
};

const BITWISE_METHODS = {
  AND: (a, b) => a & b,
  OR: (a, b) => a | b,
  NOT: (a) => ~a & 0xffff,
  LSHIFT: (a, b) => a << b,
  RSHIFT: (a, b) => a >> b,
};

const calculateWire = (input) => {
  if (typeof input === "number") return input;
  const value = wires.get(input);

  if (!value) return;
  if (typeof value === "number") return value;

  let operand1, command, operand2;
  if (value.split(" ").length === 3) {
    [operand1, command, operand2] = value.split(" ").map(tryCast);
    wires.set(
      input,
      BITWISE_METHODS[command](calculateWire(operand1), calculateWire(operand2))
    );
  } else if (value.split(" ").length === 2) {
    [command, operand1] = value.split(" ").map(tryCast);
    wires.set(input, BITWISE_METHODS[command](calculateWire(operand1)));
  } else {
    wires.set(input, calculateWire(value));
  }

  return wires.get(input);
};

for (const line of input) {
  const [left, target] = line.split(" -> ");
  wires.set(target, tryCast(left));
}

calculateWire("a");
console.log(wires.get("a"));
