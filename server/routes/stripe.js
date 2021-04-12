import express from 'express';
import { createConnectAccount, getAccountStatus } from '../controllers/stripe';
import { requireSignIn } from '../middleware';

const router = express.Router();

router.post('/create-connect-account', requireSignIn, createConnectAccount);
router.post('/get-account-status', requireSignIn, getAccountStatus);

module.exports = router;
