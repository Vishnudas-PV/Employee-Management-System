//import db.js
const db=require('./db')


//get all employee details from mongo db
const allEmployees = ()=>{
    return db.Employee.find().then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
        else{
            return{
                statusCode:200,
                message:"No data found"
            }
        }
    })
}

// Add employee details to mongodb
const addEmployees=(id,name,age,designation,salary)=>{

    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{

                statusCode:401,
                message:"Employee already exists"
            }
           
        }
        else{
            const newEmployee = new db.Employee({id,name,age,designation,salary})
            newEmployee.save()//to save new employee details into the database
               return{
                statusCode:200,
                message:'Employee  added successfully'
               }

        }
    })


}

//delete a particular employee form the database
const deleteEmployee=(id)=>{
    return db.Employee.deleteOne({id}).then((result)=>{
        if(result){

            return{
                statusCode:200,
                message:'Empployee deleted successfully'
            }
        }
        else{
            return{
                statusCode:404,
                message:'Employee not found'
            }
        }
     
    })
}

//get a particular employee details
const getAnEmp=(id)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
    })
}

//update a particular employee details
const updateAnEmp=(empId,id,name,age,designation,salary)=>{
    return db.Employee.findOne({id:empId}).then((result)=>{
        if(result){

            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;//to update in mongo db
            result.save()
            return{
                statusCode:200,
                message:'Employee has been updated successfully'

            }



        }
        else{
            return{
                statusCode:401,
                message:'Invalid operation'

            }
        }
    })
}



module.exports={
    allEmployees,
    addEmployees,
    deleteEmployee,
    getAnEmp,
    updateAnEmp,

}