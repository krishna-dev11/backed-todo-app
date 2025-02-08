const express = require("express");
const router = express.Router();

//import 
const {CreateTodo} = require("../controller/CreateTodo")
const {gettodos , gettodosbyid} = require("../controller/getTodos")
const {Updatebyid} = require("../controller/Updatebyid")
const {deletetodobyid} = require("../controller/deletetodobyid")


//define
router.post("/createtodo" , CreateTodo);
router.get("/gettodos" , gettodos);
router.get("/gettodobyid/:id" , gettodosbyid );
router.put("/updatebyid/:id" , Updatebyid );
router.delete("/Deletetodobyid/:id" , deletetodobyid)



module.exports = router;