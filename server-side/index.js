import express from 'express';
import cors from 'cors';
import faunadb from 'faunadb';
import createRouts from './router/create.js'

const app = express();
const client = new faunadb.Client({
    secret: 'fnAEdOLdGiAAwJCDZkdkmVczwiFH-w_lfo2iRiAr',
    domain: 'db.eu.fauna.com',
    scheme: 'https',
});
const {Ref, Paginate, Get, Match, Index, Create, Collection, Join, Call, Function: Fn,} = faunadb.query;

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

app.use ('/create', createRouts)

// Main Section

// Running The App
app.listen(5000, () => console.log('Server Running on http://localhost:5000'))
