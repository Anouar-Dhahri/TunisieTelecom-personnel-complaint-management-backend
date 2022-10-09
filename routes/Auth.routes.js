import express from 'express';
import { Signup, Signin, UserData, Profile } from './../controllers/Auth.Controller.js';

export const router = express.Router();

router.post('/signup', Signup);

router.post('/signin', Signin);

router.post('/user', UserData);

router.put('/profile/:id', Profile);
