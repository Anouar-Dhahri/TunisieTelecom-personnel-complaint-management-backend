import express from 'express';
const router = express.Router();
import { Signup, Signin, UserData, Profile } from './../controllers/Auth.Controller.js';

router.post('/signup', Signup);

router.post('/signin', Signin);

router.post('/user', UserData);

router.put('/profile/:id', Profile);

export default router