const todo = require("../models/todomodel")

exports.Updatebyid = async( request , response )=>{

    try{
        
      const {id} = request.params;  
      const {title ,description} = request.body;
      const updated = await todo.findByIdAndUpdate(
        {_id:id},
        {title , description , UpdatedAt:Date.now()} 

      )


     response.status(200).json(
    {
        success:true,
        data:updated,
        message:"updated successfully"
    }
 );
    }
    catch(err)
    {
        console.log("faliure occurs in updated by id"),
        response.status(500).json(
            {
                status : false,
                data : err,
                message : "err.message"
            }
        )

    }
 
}