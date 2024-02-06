const asynHandler = require('express-async-handler')

const Goal = require('../model/goalModel')
const User = require('../model/userModel')


const getGoals =asynHandler(async(req,res) =>{
    const goals = await Goal.find({user :req.user.id})
    res.status(200).json(goals)
})

const setGoal =asynHandler(async(req,res) =>{
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field' )
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    
    res.status(200).json(goal)

})
const updateGoal =asynHandler(async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    //make sure the user is owner of this goal
    const user = await User.findById(req.user.id)
    //check user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    if(goal.user.tostring() !==req.user.id){
        res.status(401)
        throw new Error("User not authorized")
    }


    const updatedGoal =await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedGoal)

})
const deleteGoal =asynHandler(async(req,res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    
    //check user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("User not authorized")
    }


    await goal.deleteOne()

    res.status(200).json({id : req.params.id})
})



module.exports ={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal

}