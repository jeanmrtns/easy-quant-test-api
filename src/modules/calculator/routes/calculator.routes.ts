import { Router } from 'express';
import { CalculatorController } from '../controllers/CalculatorController';

const calculatorRoutes = Router();
const calculatorController = new CalculatorController();

calculatorRoutes.get('/sum', calculatorController.sum);
calculatorRoutes.get('/sub', calculatorController.sub);
calculatorRoutes.get('/div', calculatorController.div);
calculatorRoutes.get('/mult', calculatorController.mult);

export { calculatorRoutes };
