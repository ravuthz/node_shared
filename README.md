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