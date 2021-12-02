const express = require('express');
const app = express()
const PORT = process.env.PORT || 3001

var students = []
app.use(express.json())

app.get('/students', (req, res) => {
    res.send(students);
});

app.post('/students', (req, res, next) => {
    var student = req.body
    console.log(student)
    students.push({
        id: student.id, 
        firstname: student.firstname, 
        lastname: student.lastname, 
        email: student.email, 
        class: student.class
    })
    res.send("done")
});

app.delete('/students:id', (req, res) => {
    let obj = array.find(student => student.id === req.params.id);
    let index = obj!==null?array.indexOf(obj) : -1
    index>=0?students.delete():res.send("not found");
});

app.put('/students/:id', (req, res) => {
    console.log(req.params.id)
    var student = req.body
    let obj = students.find(student => student.id === req.params.id && console.log(student));
    let index = obj!==null?students.indexOf(obj) : -1
    index<=0?
        students[index] = {
            id: student.id, 
            firstname: student.firstname, 
            lastname: student.lastname, 
            email: student.email, 
            class: student.class
        }&&res.send("done")
        
    :res.send("not found");
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));