import express from 'express';
import faunadb from 'faunadb';
const client = new faunadb.Client({
    secret: 'fnAEdOLdGiAAwJCDZkdkmVczwiFH-w_lfo2iRiAr',
    domain: 'db.eu.fauna.com',
    scheme: 'https',
});
const {Ref, Paginate, Get, Match, Index, Create, Collection, Join, Call, Function: Fn,} = faunadb.query;


const { request, response } = express;


const jsonParser = express.json()
const urlencodedParser = express.urlencoded({ extended: false })


export const createParty =  ('/', express.json , async (req, res) => {
    const data = req.body

    const doc = await client.query(
        Create(
            Collection('Partys'),
            { data }
        )
    )

    try {
        res.status(201).json({doc});
      } catch (error) {
        res.status(409).json({ message: error.message});
      }

})
