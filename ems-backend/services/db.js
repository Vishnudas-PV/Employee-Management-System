//1 Import mongoose
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/EMS')

//Create a model
const Employee =mongoose.model('employees',{
    id:Number,
    name:String,
    age:Number,
    designation:String,
    salary:Number,
})

//export model
module.exports={
    Employee
}