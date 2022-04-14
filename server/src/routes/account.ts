// import packages and dependencies
import { isAuthenticated, isSigner, createWallet, setClaim, updateUser, postSecret } from '../utils';
import account from "../controllers/account";
import { multer } from "../utils";
import express from "express";
const router = express();

// router.get('/', account.getAccounts);

// router.post('/', createTestWallet, account.addAccount);

router.post('/', updateUser, createWallet, setClaim, postSecret, account.addAccount);

router.post('/image', multer.single('file'), account.postImage);

router.put('/:address', isSigner, account.updateAccount);

router.get('/:address', isSigner, account.getAccount);
 
export default router;