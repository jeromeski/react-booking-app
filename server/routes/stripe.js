import express from 'express';
import { createConnectAccount } from '../controllers/stripe';
import { requireSignIn } from '../middleware';

const router = express.Router();

router.post('/create-connect-account', requireSignIn, createConnectAccount);

module.exports = router;
