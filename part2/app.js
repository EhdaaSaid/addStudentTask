// __dirname   __filename
// console.log(process.argv[2]);
// let x = 5,y=10
// if(process.argv[2]=='+') console.log(x+y)
// else console.log(x-y)

const { number, string } = require('yargs')
const yargs = require('yargs')
const student = require('./students')
yargs.command({
    command : 'add',
    describe:"add new student",
    builder:{
        id:{
            type:number
        },
        name:{
            type:String
        },
        className:{
            type:Number
        },
        sub:[{
            subName:string,
            subGrade:number
        }]
    },
    handler : function(argv){
        student.addStudent(argv.id, argv.name, argv.className , argv.sub)
    }
})


yargs.argv