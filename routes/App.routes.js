import express from 'express';
const router = express.Router();
import { AddApplication, GetApplication, deleteApplication } from './../controllers/App.Controller.js'
import { upload } from '../helpers/file.helper.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

router.get('/get', GetApplication);

router.post('/add', upload.single('file'), AddApplication);

router.delete('/delete/:id', deleteApplication);

export default router