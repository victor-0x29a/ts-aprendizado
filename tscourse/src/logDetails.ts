// Type Aliases e Union
type ID = number;
type Platform = "windows" | "linux" | "mac os";
function logDetais(uid: number | string, item: string) {
  console.log(`${uid} = ${item}`);
}
function logInfo(uid: number | string, user: string): string {
  return `${uid} = ${user}`;
}

function newLogDetails(uid: ID) {
  console.log(uid);
}
function myPlatform(plataforma: Platform) {
  console.log(plataforma);
}

logDetais(123, "sapato");
console.log(logInfo("01", "Vicccctorrrrr"));
console.log(logInfo(1, "Vicccctorrrrr"));
newLogDetails(0x29a);
myPlatform("windows");
