

const yargs = require('yargs')
const studentsss = require('./students.json')

let avlClasses = ['a','b', 'c']
addStudent = (id ,name, className , sub) =>{
    if( !avlClasses.includes(className) ) return console.log('error class')
    let student = {
       id, name, className , sub
    }
    console.log(student);
}


//title, content, duedate
yargs.command({
    command:'add',
    describe:"add new task with title, content, end date",
    builder:{
        id:{
            type:Number,
            default:parseInt((Date.now()) * Math.random())
        },         
        name:{
            type:String,
            demandOption: true
        },
        className:{
            type:String,
            demandOption:true
        },
        sub:[{
            type:string,
            demandOption:true
        },
        {
            type:number,
            demandOption:true
        }]
    },
    handler: function(argv){
        let student = {id:argv.id, name:argv.name,className:argv.className, sub:argv.sub}
        studentsss.addTask(student)
    }
})

yargs.command({
    command:"showAll"
})

yargs.command({
    command:"editTask"
})

yargs.command({
    command:"delTask"
})

yargs.argv
module.exports = {addStudent}