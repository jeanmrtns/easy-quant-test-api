import { AppError } from '@shared/errors/AppError';
interface IRequest {
  number1: number;
  number2: number;
}

class MultService {
  public async execute({ number1, number2 }: IRequest) {
    if (!number1 || !number2) {
      throw new AppError('Invalid numbers');
    }

    return number1 * number2;
  }
}

export { MultService };
