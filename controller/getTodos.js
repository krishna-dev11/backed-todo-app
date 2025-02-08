
const todo = require("../models/todomodel");

exports.gettodos = async(request , response)=>{
   try
   {
     const todos = await todo.find({});
     response.status(200).json({
        status : true,
        data:todos,
        message : "data fetch successfully"
     })
   }
   catch(err)
   {
    response.status(500).json({
        status : false,
        data:err,
        message : "error in fetching of whole data"
    })
   }
}

exports.gettodosbyid = async(request , response)=>{
    try
    {
      const {id} = request.params;  
      const todos = await todo.findById({_id:id});

      if(!todos)
      {
        return response.status(404).json({
            success:false,
            message : "No data found for these id"
        })
       }

       response.status(200).json({
        status : true,
        data:todos,
        message : "data fetch successfully by id"
     })
  }
    catch(err)
    {
     response.status(500).json({
         status : false,
         data:err,
         message : "error in fetching of whole data by id "
     })
    }
 }