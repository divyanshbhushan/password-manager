const mongoose = require('mongoose');

 mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/password-manager').then(()=>{
    if(process.env.MONGO_URI){
        console.log("Connected to Database")
    } else{
        console.warn("Connected to local Database")
    }
}).catch((error)=>{
    console.error("Couldn't connect to Database: ", error);
})

module.exports = mongoose