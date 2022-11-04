// A)
type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// B)
// 1. Adicionar o script "exercicio4": "tsc && node ./build/exercicio4.js"
// no package.json;
// 2. Executar o comando "npm run exercicio4" no terminal.
// 3. O arquivo transpilado pode ser encontrado dentro da pasta build/
// conforme configurado na propriedade "outDir" no arquivo tsconfig.json

// C)
// A pasta de origem dos scripts deve ser informada na propriedade "rootDir"
// do arquivo tsconfig.json. Se o arquivo .ts a ser executado estiver na
// pasta src/, então no tsconfig.json deve constar "rootDir": "./src"

// D)
// 1. Usando apenas o comando "tsc" na linha de comando, todos os arquivos
//  .ts encontrados na pasta informada na "rootDir" são transpilados
// 2. É possivel transpilar multiplos arquivos ao mesmo tempo adicionando
// os nomes dos arquivos como parâmetros para o comando tsc.
// Ex:  tsc arquivo1.ts arquivo2.ts