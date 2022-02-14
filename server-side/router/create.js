import express from 'express';
import cors from 'cors';
import { createParty } from '../controller/createcontroller.js'

const router = express.Router();

router.post('/', createParty);

export default router; 