import express from 'express';
import { CartData, CloseRequests, OpenRequests, ActionRequests, ApprovedRequests } from './../controllers/Data.Controller.js';
import verifyAccessToken from './../helpers/jwt.helper.js'

export const router = express.Router();

router.get('/cart/:id', CartData);
router.get('/request/open/:id', OpenRequests);
router.get('/request/close/:id', CloseRequests);
router.get('/request/action/:id', ActionRequests);
router.get('/request/approved/:id', ApprovedRequests);
