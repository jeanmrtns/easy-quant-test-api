import { Router } from 'express';
import { CalculatorController } from '../controllers/CalculatorController';

const calculatorRoutes = Router();
const calculatorController = new CalculatorController();

calculatorRoutes.post('/sum', calculatorController.sum);
calculatorRoutes.post('/sub', calculatorController.sub);
calculatorRoutes.post('/div', calculatorController.div);
calculatorRoutes.post('/mult', calculatorController.mult);

export { calculatorRoutes };
