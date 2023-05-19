import { groupArrayByKeys, groupObjectByKeys } from "node-shared";

const items = [
    { id: 1, type: "A", tags: "string", value: "1A" },
    { id: 2, type: "B", tags: "string", value: "2B" },
    { id: 3, type: "C", tags: "string", value: "1C" },
    { id: 4, type: "D", tags: "number", value: 33 },
    { id: 5, type: "E", tags: "number", value: 43 },
];

const groupArray1 = groupArrayByKeys(items, ['type', 'tags']);
const groupObject1 = groupObjectByKeys(items, ['type', 'tags']);

console.log('groupArray1: ', groupArray1);
console.log('groupObject1: ', groupObject1);