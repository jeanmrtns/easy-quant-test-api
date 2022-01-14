import { Request, Response } from 'express';
import { DivService } from '../services/DivService';
import { SubService } from '../services/SubService';
import { SumService } from '../services/SumService';
import { MultService } from '../services/MultService';

class CalculatorController {
  public async sum(req: Request, res: Response) {
    const { number1, number2 } = req.body;

    const numbers = {
      number1: Number(number1),
      number2: Number(number2),
    };

    const sumService = new SumService();
    const sum = await sumService.execute(numbers);

    return res.json({
      result: sum,
    });
  }

  public async sub(req: Request, res: Response) {
    const { number1, number2 } = req.body;

    const numbers = {
      number1: Number(number1),
      number2: Number(number2),
    };

    const subService = new SubService();
    const sub = await subService.execute(numbers);

    return res.json({
      result: sub,
    });
  }

  public async div(req: Request, res: Response) {
    const { number1, number2 } = req.body;

    const numbers = {
      number1: Number(number1),
      number2: Number(number2),
    };

    const divService = new DivService();
    const div = await divService.execute(numbers);

    return res.json({
      result: div,
    });
  }

  public async mult(req: Request, res: Response) {
    const { number1, number2 } = req.body;

    const numbers = {
      number1: Number(number1),
      number2: Number(number2),
    };

    const multService = new MultService();
    const mult = await multService.execute(numbers);

    return res.json({
      result: mult,
    });
  }
}

export { CalculatorController };
