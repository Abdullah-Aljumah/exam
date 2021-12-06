 ## Controller folder :

1 - const todoModel = require("./../../db/models/todos");  --> const todoModel = require("./../../db/models/todo");

2- module.export --> module.exports

3-   const todo = req.body.todo -->   const todo = req.body

4- create new task   task: todo,

## Routes folder :
1- exports updateTodo

## index file :

1- require("../db"); --> require("./db/models/todo");

2- const todoRouter = require("./routers/routes/todos");

3- const morgan = require("morgan")

4- app.listen add )

## Package json  "mongose": "0.0.2-security" -->   "mongoose": "0.0.2-security"

## Model todo :

-   task: { type: Boolean, required: true }, -->   task: { type: String, required: true },

1- require("mongose"); --> require("mongoose");

2- mongoose.module("Todo", todoSchema); --> mongoose.Schema("Todo", todoSchema);

3- const todoModel = mongoose.model("Todo", todoSchema); --> module.exports = mongoose.model("Todo", todoSchema);

