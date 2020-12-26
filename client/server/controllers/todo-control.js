const Todos = require('../models/todo-model');

const createTodo = (req,res)=>{
    const body = req.body;
    if( !body ){
        return res.status(400).json({
            success: false,
            error : 'Item node provided',
        })
    }
    const todo = new Todos(body);
    if(!todo){
        return res.status(400).json({success:false,error:err});
    }
    todo.save().then(()=>{
        return res.status(200).json({
            success: true,
            id: todo._id,
            message:'Todo item created',
        })
    }).catch(err=>{
        return res.status(400).json({
            err,message:'Todo item not created',
        })
    })
};

const getTodos = async (req,res) => {
    await Todos.find({},(err,todos)=>{
        if(err){
            return res.status(400).json({success:false,error:err});
        }
        if(!todos.length){
            return res.status(404).json({success:false,error:'Item not found'});
        }
        return res.status(200).json({success:true,data:todos});
    }).catch(err=>console.log(err));
};

module.exports = {createTodo,getTodos};