const cpf = '145.382.206-20'

function validateCpf(cpf:string):boolean{
    const cleanCpf:string = cpf.split(/\D/).join('')
    const firstNineDigits:string = cleanCpf.slice(0,-2)
    const lastTwoDigits:string = cleanCpf.slice(-2)

    let letterPosition:number = 0
    let lettersSum:number = 0
    let firstTenDigits:string = ''
    let checkedFirstVerifDigit:number = 0
    let checkedLastVerifDigit:number = 0
    let checkedTwoDigits:string = ''

    for (let i = 10; i > 1; i--) {
        lettersSum += Number(firstNineDigits[letterPosition])*i
        letterPosition++
    }

    checkedFirstVerifDigit = lettersSum % 11
    checkedFirstVerifDigit = 11 - checkedFirstVerifDigit
    
    if (checkedFirstVerifDigit >= 10) {
        checkedFirstVerifDigit = 0
    }

    firstTenDigits = firstNineDigits+checkedFirstVerifDigit.toString()
    
    lettersSum = 0
    letterPosition = 0
    for (let i = 11; i > 1; i--) {
        lettersSum += Number(firstTenDigits[letterPosition])*i
        letterPosition++
    }
    
    checkedLastVerifDigit = lettersSum % 11
    checkedLastVerifDigit = 11 - checkedLastVerifDigit
    
    if (checkedLastVerifDigit >= 10) {
        checkedLastVerifDigit = 0
    }
    
    checkedTwoDigits = checkedFirstVerifDigit.toString()+checkedLastVerifDigit.toString()
    
    return checkedTwoDigits === lastTwoDigits
}

console.log(validateCpf(cpf))