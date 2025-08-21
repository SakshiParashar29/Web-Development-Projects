import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import mongoose from "mongoose";
import noteRoutes from "./Routes/notesRoute.js"

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MogoDB connected"))
.catch((err) => console.log("Something Went Wrong!!", err));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is listening at port number: ${port}`);
})

app.use('/api/notes', noteRoutes);