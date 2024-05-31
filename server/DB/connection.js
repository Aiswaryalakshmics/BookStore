const mongoose = require('mongoose')
const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log("Mongodb Atlas connected Successfully with server");
}).catch(err=>{
    console.log("Mongodb Connection Failed : "+err);
})

