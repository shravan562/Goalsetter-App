const asynHandler = require('express-async-handler')


const getGoals =asynHandler(async(req,res) =>{
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field' )
    }
    res.status(200).json({message : 'Get goals'})
})

const setGoal =asynHandler(async(req,res) =>{
    res.status(200).json({message : 'Set goals'})

})
const updateGoal =asynHandler(async(req,res)=>{
    res.status(200).json({ message : `Update goal ${req.params.id}`})

})
const deleteGoal =asynHandler(async(req,res) => {
    res.status(200).json({ message : `Delete goal ${req.params.id}`})
})



module.exports ={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal

}