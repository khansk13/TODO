const app = require("./app");
const mongoose=require("mongoose");
port=3000;

dburl ="mongodb+srv://khansk13:mypassword@cluster0.dkbcfkn.mongodb.net/newlist?retryWrites=true&w=majority"

mongoose.connect(dburl)
  .then((result)=>{
    console.log("Database Connected")
  })
  .catch ((err)=>{
    console.log(err);
  })

app.get('/',(req,res)=>{
  res.send('hello word');
})

app.listen(port,()=>{
  console.log("server listening on http://localhost:"+port)
});