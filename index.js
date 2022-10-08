import express from 'express'
const app = express();
import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
const port = process.env.PORT || 5100;

import dbConnect from './database/connection.js';

import { router as authRouter } from './routes/Auth.routes.js'
import { router as userRouter } from './routes/User.routes.js'
import { router as accountRouter } from './routes/Account.routes.js'
import { router as dataRouter } from './routes/Data.routes.js'
import { router as hardwareRouter } from './routes/Hardware.routes.js'
import { router as softwareRouter } from './routes/Software.routes.js'
import { router as updateaccountRouter } from './routes/UpdateAccount.routes.js'
import { router as appRouter } from './routes/App.routes.js'

const __dirname = path.resolve();

dotenv.config();

app.use('uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use('/api/auth', authRouter );
app.use('/api/users', userRouter );
app.use('/api/account', accountRouter );
app.use('/api/data', dataRouter );
app.use('/api/hardware', hardwareRouter );
app.use('/api/software', softwareRouter );
app.use('/api/updateaccount', updateaccountRouter );
app.use('/api/app', appRouter );

dbConnect();

app.get('/', (req, res) => res.send('The server is healthy '))
app.listen(port, () => console.log(`Server is running on port ${port}!`))