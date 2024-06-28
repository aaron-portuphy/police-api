import express from 'express';
import 'dotenv/config'
import { dbConnection } from "./config/db.js";
import { router } from "./routes/route.js";

// Create Express App
const app = express();
dbConnection();

//apply middleware
app.use(express.json());

//defining routes
app.use(router);

// const mongoUri = process.env.Mongo_url

// mongoose.connect(mongoUri).then(() =>{
//     console.log('Database is connected')
// })


// Define route
// app.get('./', (req, res) =>{
//     res.json('Welcome Home');
// });

//Use routes
// app.use(statementRouter);

// Listen for incoming request
app.listen(3000, ()=>{
    console.log('App listening on Port 3000');
});