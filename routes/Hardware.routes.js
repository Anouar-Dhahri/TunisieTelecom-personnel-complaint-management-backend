import express from 'express';
const router = express.Router();
import { AddHardware, GetHardware, deleteHardware } from '../controllers/Hardware.Controller.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

router.get('/get', GetHardware);

router.post('/add', AddHardware);

router.delete('/delete/:id', deleteHardware );

export default router