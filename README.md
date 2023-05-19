# NodeJS with Typescript Base Configure

```bash

yarn init -y

yarn add -D typescript @types/node ts-node nodemon rimraf

npx tsc --init --rootDir src --outDir build \
--esModuleInterop --resolveJsonModule --lib es6 \
--module commonjs --allowJs true --noImplicitAny true

mkdir src
touch src/index.ts

```

## Install and Use this package as dependencies
```json
// package.json

"dependencies": {
    // ...
    "@node-shared": "git+https://github.com/ravuthz/node_shared.git",
    // ...
},
```

```bash
yarn install
```

```ts
// import { groupArrayByKeys, groupObjectByKeys } from "@node-shared/groupBy";
import { groupArrayByKeys, groupObjectByKeys } from "@node-shared";

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

```