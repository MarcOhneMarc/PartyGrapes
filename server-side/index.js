import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.options('*', cors())
app.use(
    cors({
        origin: "*",
        credentials: true,
        allowedHeaders: true,
    })
);
