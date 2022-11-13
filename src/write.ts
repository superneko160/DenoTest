// JSONファイルに書き込み
function writeJson(path: string, data: object): string {
    try {
        Deno.writeTextFileSync(path, JSON.stringify(data));
        return "Written to " + path;
    }
    catch (e) {
        return e.message;
    }
}

console.log(writeJson(
    "./data/sample2.json",
    {"id": 7, "name": "Alice", "age": 13}
));