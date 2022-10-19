const userInput = require("readline-sync")

const userName=userInput.question("Informe seu nome.")
const userBday=userInput.question("Informe sua data de nascimento no formato dd/mm/aaaa.")

function greetUser(name:string, date:string):string{
    enum Months {
        "/01" = "Janeiro",
        "/02" = "Fevereiro",
        "/03" = "Março",
        "/04" = "Abril",
        "/05" = "Maio",
        "/06" = "Junho",
        "/07" = "Julho",
        "/08" = "Agosto",
        "/09" = "Setembro",
        "/10" = "Outubro",
        "/11" = "Novembro",
        "/12" = "Dezembro"
    }

    const capitalizeName = name.charAt(0).toUpperCase()+name.slice(1)
    const day = date.slice(0,2)
    const monthToString = Months[date.slice(2,5) as keyof typeof Months]
    const year = date.slice(6,)
    
    return `Olá me chamo ${capitalizeName}, nasci no dia ${day} do mês de ${monthToString} de ${year}.`
}

console.log(greetUser(userName, userBday))