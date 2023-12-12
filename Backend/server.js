const dotenv = require('dotenv');  
const express = require('express');
const app = express();
const userRoute=require("./Routes/TaskRoute");
const taskRoute=require("./Routes/TaskRoute");
dotenv.config();  

const PORT = process.env.PORT || 3000;  

app.use('/users', userRoute);
app.use('/tasks', taskRoute);

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
