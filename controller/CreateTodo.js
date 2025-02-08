const todo = require("../models/todomodel")

exports.CreateTodo = async( request , response )=>{

    try{
        const {title , description} = request.body;

 const answer = await todo.create({title , description});

 response.status(200).json(
    {
        success:true,
        data:answer,
        message:"entry created successfully"
    }
 );
    }
    catch(err)
    {
        console.log("faliure occurs"),
        response.status(500).json(
            {
                status : false,
                data : err,
                message : "err.message"
            }
        )

    }
 
}