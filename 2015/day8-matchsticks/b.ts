const input = Deno.readTextFileSync("input.txt").split("\r\n");

let [totalCode, totalEncoded] = [0, 0];

for (const word of input) {
  const encoded = word.replace(/[\\"]/g, "\\$&");
  totalCode += word.length;
  totalEncoded += encoded.length + 2;
}

console.log(totalEncoded - totalCode);
