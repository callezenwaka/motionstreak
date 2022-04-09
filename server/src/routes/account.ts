// import packages and dependencies
import { isAuthenticated, createWallet } from '../auth';
import account from "../controllers/account";
import { multer } from "../utils";
import express from "express";
const router = express();

// router.get('/', account.getAccounts);

router.post('/', createWallet, account.addAccount);

router.post('/image', multer.single('file'), account.postImage);

router.put('/:address', account.updateAccount);

router.get('/:address', account.getAccount);
 
export default router;