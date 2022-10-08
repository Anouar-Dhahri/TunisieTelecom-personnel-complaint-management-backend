import express from 'express';
const router = express.Router();
import { GetAccount, AddAccount, deleteAccount } from './../controllers/Account.Controller.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

router.get('/get', GetAccount);

router.post('/add', AddAccount);

router.delete('/delete/:id', deleteAccount);

export default  router;