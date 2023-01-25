import { CustomError } from "./CustomError"

export class InsuficientData extends CustomError {
    constructor(){
        super(400, "Informe title, description, duration_in_minutes e year_of_release")
    }
}