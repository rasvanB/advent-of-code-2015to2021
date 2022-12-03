const input = Deno.readTextFileSync("input.txt").split("\r\n");
let goodWords = 0;

for (const word of input) {
  let numberOfVowels = 0;
  let lastCharacter = "";
  let hasDouble = false;

  for (const c of word) {
    if ("aeiou".includes(c)) numberOfVowels++;
    if (lastCharacter === c) hasDouble = true;
    lastCharacter = c;
  }
  const containsBad =
    word.includes("ab") ||
    word.includes("cd") ||
    word.includes("pq") ||
    word.includes("xy");

  if (numberOfVowels >= 3 && hasDouble && !containsBad) goodWords++;
}

console.log(goodWords);
