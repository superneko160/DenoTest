// ファイルを読み込みターミナルに表示
const text = await Deno.readTextFile("./data/sample.json");
console.log(text);