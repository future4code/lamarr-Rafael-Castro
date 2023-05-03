import { CustomError } from "./CustomError"

export class UserIdNotprovided extends CustomError {
    constructor() {
        super(400, "Please inform User ID.")
    }
}

export class UserNotFound extends CustomError {
    constructor() {
        super(404, "User not found.")
    }
}