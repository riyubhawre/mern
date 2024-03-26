const connectToMongo=require('./db')
const express=require('express')



const cors=require('cors')

connectToMongo()

const app=express()
const port=8888
app.use(express.json());
app.use(cors());

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
// app.get('/',(req,res)=>{
//     res.send("hello psk")
// })

app.listen(port,()=>{
    console.log(`ebook http://localhost:${port}`)
})
