const operator = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

switch (operator) {
    case 'soma':
    case '+':
        console.log(num1 + num2)
        break
    case 'subtracao':
    case '-':
        console.log(num1 - num2)
        break
    case 'multiplicacao':
    case '*':
        console.log(num1 * num2)
        break
    case 'divisao':
    case '/':
        console.log(num1 / num2)
        break
    default:
        console.log('Ops. Operador inválido.')
}
