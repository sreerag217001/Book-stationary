const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/book')
const Book=mongoose.model('Book',{
    id:Number,
    name:String,
    image:String
})
const Branch=mongoose.model('Branch',{
id:Number,
name:String,
icon:String,
image:String
})

module.exports={
    Book,
    Branch

}