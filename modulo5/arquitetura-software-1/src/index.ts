import app from "./app"
import { UserController } from "./controller/UserController"

const userController = new UserController

app.post("/table", userController.createTableCtl);
app.post("/user", userController.createUserCtl);
app.get("/all", userController.getUsersCtl)
