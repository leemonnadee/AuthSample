
const express=require('express')
const app=express();
const path=require('path')


//for  ejs 
app.set('view engine', 'ejs');
//to remove ejs extention when calling
app.set('views',path.join(__dirname,'views'));

//parse data to json
app.use(express.json());
app.use(express.urlencoded({extended:true}));





app.post('/',(req,res)=>{
//this is where the logic start
const dataAuth=req.body.authCode;
res.send(dataAuth);
//logic here
//if(dataAuth==true){
    
//}
//you can redirect to new page

//res.redirect('/ejsfileName')

})

app.get('/',(req,res)=>{
    
res.render('auth');

})


//Port
app.listen(3000,()=>{

    console.log('Listening on port 3000!')
})