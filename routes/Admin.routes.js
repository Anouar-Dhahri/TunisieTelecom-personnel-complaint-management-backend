import express from 'express'
import {
  dashbord,
  login,
  accountApprovel,
  accountStatus,
  hardwareApprovel,
  hardwareStatus,
  softwareApprovel,
  softwareStatus,
  appApprovel,
  appStatus,
  uptaccountApprovel,
  uptaccountStatus,
  deleteUser
} from './../controllers/Admin.Controller.js'

export const router = express.Router()

router.get('/dashbord', dashbord);

router.post('/login', login);

router.put('/accountApprovel/:id', accountApprovel);

router.put('/accountStatus/:id', accountStatus);

router.put('/hardwareApprovel/:id', hardwareApprovel);

router.put('/hardwareStatus/:id', hardwareStatus);

router.put('/softwareApprovel/:id', softwareApprovel);

router.put('/softwareStatus/:id', softwareStatus);

router.put('/appApprovel/:id', appApprovel);

router.put('/appStatus/:id', appStatus);

router.put('/uptaccountApprovel/:id', uptaccountApprovel);

router.put('/uptaccountStatus/:id', uptaccountStatus);

router.delete('/user/:id', deleteUser)