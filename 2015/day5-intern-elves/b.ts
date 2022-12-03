const input = Deno.readTextFileSync("input.txt").split("\r\n");

console.log(
  input.reduce(
    (acc, word) =>
      (acc +=
        [...word.matchAll(/(\w)(\w).*\1\2/g)].length > 0 &&
        [...word.matchAll(/(\w)(\w)\1/g)].length > 0
          ? 1
          : 0),
    0
  )
);
