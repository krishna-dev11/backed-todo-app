const todo = require("../models/todomodel")

exports.deletetodobyid = async( request , response )=>{
    try{
        const id = request.params;
     await todo.findOneAndDelete(id);

    response.status(200).json({
        success:true,
        
        message : "deleted by id succesfully"
    })
    }
    catch(err)
    {
        response.status(500).json({
            success:false,
            message : "error occurs in delete of todo by id"
        })
    }
}

    