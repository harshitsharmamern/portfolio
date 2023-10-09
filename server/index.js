const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

///routes
app.use("/api/user", require("./src/routes/user"));


app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});
