import express from 'express';
import { GetUpdateAccount, AddUpdateAccount, deleteUpdateAccount } from './../controllers/UpdateAccount.Controller.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

export const router = express.Router();

router.get('/get', GetUpdateAccount);

router.post('/add', AddUpdateAccount);

router.delete('/delete/:id', deleteUpdateAccount);
