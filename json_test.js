// JSON PARSE
const str = '{"data": [ { "itemList" : "ABC", "items": ["123", "456"]}]}';

console.log(JSON.parse(str).data[0].items);

// JSON STRINGIFY
console.log(JSON.stringify({ x: 1, y: 12, z: 40}));
