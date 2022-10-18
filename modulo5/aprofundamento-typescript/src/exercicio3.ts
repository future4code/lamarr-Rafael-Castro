// A)
type Post = {
    autor: string,
    texto: string
}

const posts: Post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]


// B) 
// A função recebe um array de posts(objetos) e um nome(string) como entrada.
// Devolve um array contendo os posts(objetos) nos quais o autor(propriedade)
// seja igual ao nome(string) fornecido como entrada.

function buscarPostsPorAutor(posts:Post[], autorInformado:string):Post[] {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}