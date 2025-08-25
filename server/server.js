

require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();
const router = require('./router/userRouter');
const connectDb = require('./utils/db');
const  bookRouter  = require('./router/bookmarkRouter');

app.use(cors({
  origin: 'https://devlink-clientlast.onrender.com',// your frontend
  methods: ["GET", "POST","PUT", "DELETE"], // allowed methods
  credentials: true // if sending cookies
}));


app.use(express.json());
app.use("/api/auth", router);
app.use("/api", bookRouter);

const PORT = process.env.PORT || 5000;

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running at the port ${PORT}`);
    });
});


