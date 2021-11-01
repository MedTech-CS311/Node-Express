
var express = require('express')
var app = express()
const port = 3000
app.use(express.json())

var Students = []

var student = {
    id : Number,
    firstName : String,
    lastName:String,
    email:String,
    classe:String

}

function createStudent(id,firstName,lastName,email,classe){
   var student = {
        id ,
        firstName ,
        lastName,
        email,
        classe
    }
    return student
}


function addStudent(student){
    Students.push(student)
}
addStudent(createStudent(1,"Seif","bh","Seif@gmail.com","F2"))
addStudent(createStudent(2,"Hosni","Hamdi","Hamdi@gmail.com","F3"))


//GET /students => returns the list of all existing students

app.get('/students',function(req,res){
    res.send(Students)
})

//POST /students => creates a new student

app.post('/students',(req,res)=>{
   Students.push(req.body)
    res.send("Student added sucessfully")
})

// DELETE /students/:id => deletes the student with the requested id

app.delete('/students/:id',(req,res)=>{
     var id  = req.params.id
     for (let i = 0; i < Students.length; i++) {
         if(Students[i].id == id){
             Students.splice(i,1)
             res.send("Student deleted successfully")
             break
         }
         res.send("404 Student not found")
         
     }
})

//PUT /students/:id => updates the student with the requested id

app.put('/students/:id',(req,res)=>{
    var id = req.params.id
    for (let i = 0; i < Students.length; i++) {
        if(Students[i].id == id){
            Students[i].firstName = req.body.firstName
            Students[i].lastName = req.body.lastName
            Students[i].email = req.body.email
            Students[i].classe = req.body.classe
            res.send("Student updated successfully")
            break
        }
        res.send("404 Student not found")
    }
})

 //GET /students/:id => returns the student with the requested id

app.get('/students/:id',(req,res)=>{
    for (let i = 0; i < Students.length; i++) {
        if(Students[i].id == req.params.id){
            res.send(Students[i])
        }
        res.send("You provided the wrong ID")
    }
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  })