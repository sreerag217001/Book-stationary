const db=require('./db')
const allBooks=()=>{
    return db.Book.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    books:result
                }
            }else{
                return{
                    statusCode:404,
                    message:'No data available'
                }
            }
        }
    )
}
const allBranches=()=>{
    return db.Branch.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    branches:result
                }
            }else{
                return{
                    statusCode:404,
                    message:'No branch data available'
                }
            }
        }
    )
}
module.exports={
    allBooks,
    allBranches
}