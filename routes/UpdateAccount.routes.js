import express from 'express';
const router = express.Router();
import { GetUpdateAccount, AddUpdateAccount, deleteUpdateAccount } from './../controllers/UpdateAccount.Controller.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

router.get('/get', GetUpdateAccount);

router.post('/add', AddUpdateAccount);

router.delete('/delete/:id', deleteUpdateAccount);

export default router