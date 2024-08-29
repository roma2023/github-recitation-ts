// Endpoint for querying the fibonacci numbers

import fibonacci from './fib';

export default (req: { params: { num: string } }, res: { send: (body: string) => void }): void => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num, 10));
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};