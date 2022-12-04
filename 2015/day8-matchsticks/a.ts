const findUnicodeAndEscaped = /\\x[0-9a-fA-F]{2}|\\\\|\\\"/g;
const input = Deno.readTextFileSync("input.txt").split("\r\n");

let total = 0;
for (const word of input) {
  const strippedWord = word
    .slice(1, word.length - 1)
    .replaceAll(findUnicodeAndEscaped, "a");
  total += word.length - strippedWord.length;
}

console.log(total);
