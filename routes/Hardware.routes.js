import express from 'express';
import { AddHardware, GetHardware, deleteHardware } from '../controllers/Hardware.Controller.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

export const router = express.Router();

router.get('/get', GetHardware);

router.post('/add', AddHardware);

router.delete('/delete/:id', deleteHardware );
