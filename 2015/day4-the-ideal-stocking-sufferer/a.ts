import md5 from "https://esm.sh/md5@2.3.0";
const key = "iwrupvqb";
let hash = "";
let i = 0;

while (!hash.startsWith("000000")) {
  i++;
  hash = md5(key + i);
}
console.log("RESULT: ", i);
console.log("HASH: ", hash);
