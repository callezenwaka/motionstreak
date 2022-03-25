// import packages and dependencies
// import { authenticate } from '../utils/auth';
import index from "../controllers/index";
import express from "express";
const router = express();

router.get('/', index.getTests);

router.post('/', index.postTest);

// router.get('/', index.getTransactions);

// router.get('/count', index.getTransactionCount);

// router.post('/', index.sendTransaction);
 
export default router;