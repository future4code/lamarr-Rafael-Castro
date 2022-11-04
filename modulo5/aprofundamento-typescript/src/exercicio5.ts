type Consultas = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}

const consultasAgendadas: Consultas[] = [
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" },
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" }
]

function ordenaAgendamentos(lista:Consultas[]):Consultas[] {
    lista.sort((a,b)=>{
        let lowerCaseA = a.nome.toLowerCase()
        let lowerCaseB = b.nome.toLowerCase()

        if (lowerCaseA < lowerCaseB) {
            return -1
        }
        if (lowerCaseA > lowerCaseB) {
            return 1
        }
        return 0
    })
    return lista
}

console.log(ordenaAgendamentos(consultasAgendadas))
