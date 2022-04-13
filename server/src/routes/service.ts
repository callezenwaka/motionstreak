// import packages and dependencies
import { isAuthenticated, isSigner } from '../utils';
import service from "../controllers/service";
import express from "express";
const router = express();

router.get('/', service.getServices);

router.post('/', isSigner, service.addService);

router.put('/:index', isSigner, service.updateService);

router.get('/:index', isSigner, service.getService);

router.delete('/:index', isSigner, service.deleteService);

// router.get('/', isAuthenticated, service.getServices);
 
export default router;