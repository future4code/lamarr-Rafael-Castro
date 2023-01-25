import { CustomError } from "./CustomError";

export class InvalidEmail extends CustomError {
    constructor(){
        super(400, "Email inválido.")
    }
}

export class InvalidPassword extends CustomError {
    constructor(){
        super(400, "Senha muito curta.")
    }
}

export class InsuficientData extends CustomError {
    constructor(){
        super(400, "Informe name, email e password")
    }
}