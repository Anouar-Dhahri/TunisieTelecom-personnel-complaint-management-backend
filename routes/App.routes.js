import express from 'express';
import { AddApplication, GetApplication, deleteApplication } from './../controllers/App.Controller.js'
import { upload } from '../helpers/file.helper.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

export const router = express.Router();

router.get('/get', GetApplication);

router.post('/add', upload.single('file'), AddApplication);

router.delete('/delete/:id', deleteApplication);
