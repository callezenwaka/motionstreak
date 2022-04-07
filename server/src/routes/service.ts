// import packages and dependencies
// import { isAuthenticated } from '../auth';
import service from "../controllers/service";
import express from "express";
const router = express();

router.get('/', service.getServices);

router.post('/', service.addService);

router.put('/:index', service.updateService);

router.get('/:index', service.getService);

router.delete('/:index', service.deleteService);

// router.get('/', isAuthenticated, service.getServices);
 
export default router;