import express from 'express';
const router = express.Router();
import { AddSoftware, GetSoftware, deleteSofware } from '../controllers/Software.Controller.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

router.get('/get', GetSoftware);

router.post('/add', AddSoftware);

router.delete('/delete/:id', deleteSofware);

export default router