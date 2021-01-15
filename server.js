//importing express module 
const exp=require('express')

//creating server obj
const app=exp();

//assigning port number
// port=1007;
// app.listen(port,console.log(`server is listening on ${port}`))

app.listen(process.env.PORT || 8080 ,()=>{
    console.log('server started on port 8080')
})

//importing path module
const path=require('path')

app.use(exp.static(path.join(__dirname,'./dist/KVRSTUDIES')));