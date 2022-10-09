import express from 'express';
import { GetAccount, AddAccount, deleteAccount } from './../controllers/Account.Controller.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

export const router = express.Router();

router.get('/get', GetAccount);

router.post('/add', AddAccount);

router.delete('/delete/:id', deleteAccount);
