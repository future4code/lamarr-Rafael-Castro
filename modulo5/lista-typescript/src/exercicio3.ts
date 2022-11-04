enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Movie = {
    nomeFilme:string,
    anoLancamento:number,
    generoFilme:string,
    pontuacao?:number
}

function catalogMovie(name:string, year:number, genre:string, score?:number):Movie{
    if (typeof score !== 'number') {
        const catalogedMovie:Movie ={
            nomeFilme: name,
            anoLancamento: year,
            generoFilme: GENERO[genre as keyof typeof GENERO]
        }
        return catalogedMovie
    }
    const catalogedMovie:Movie ={
        nomeFilme: name,
        anoLancamento: year,
        generoFilme: GENERO[genre as keyof typeof GENERO],
        pontuacao: score
    }
    return catalogedMovie
}

console.log(catalogMovie('Matrix', 1999, 'ACAO'))