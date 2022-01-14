import { calculatorRoutes } from '@modules/calculator/routes/calculator.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/calculator', calculatorRoutes);

export { routes };
