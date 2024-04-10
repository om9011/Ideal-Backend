import dotenv from "dotenv";

import express from "express"
import { connectDB } from "./db/connectDB.js";


dotenv.config({
    path: "./env"
})

connectDB(); // connect to mongo Atlas




