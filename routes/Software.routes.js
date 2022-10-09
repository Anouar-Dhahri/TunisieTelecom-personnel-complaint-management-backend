import express from 'express';
import { AddSoftware, GetSoftware, deleteSofware } from '../controllers/Software.Controller.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

export const router = express.Router();

router.get('/get', GetSoftware);

router.post('/add', AddSoftware);

router.delete('/delete/:id', deleteSofware);