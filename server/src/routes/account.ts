// import packages and dependencies
import { isAuthenticated, createWallet } from '../auth';
import account from "../controllers/account";
import express from "express";
const router = express();

// router.get('/', index.getTests);

router.post('/', createWallet, account.addAccount);

router.get('/:address', account.getAccount);

router.post('/image', account.postImage);

router.put('/', account.updateAccount);
 
export default router;