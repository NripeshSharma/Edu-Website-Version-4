const mongoose = require("mongoose");

mongoose.connect("mongodb:seekh.herokuapp.com:27017/Registration")
.then(()=>{ console.log(`Connection Successful`);  })

.catch((err)=>{
    console.log(`No Connection Established`); });
