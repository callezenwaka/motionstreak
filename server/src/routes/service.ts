// import packages and dependencies
// import { authenticate } from '../utils/auth';
import service from "../controllers/service";
import express from "express";
const router = express();

router.get('/', service.getFees);

router.post('/', service.addFee);

router.put('/:index', service.updateFee);

router.get('/:index', service.getFee);

router.delete('/:index', service.deleteFee);

// router.get('/:id', isAgent('update'), service.updateOne);
 
export default router;