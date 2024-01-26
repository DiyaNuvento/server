import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // Custom function 1
  async function1(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Function 1 executed');
      }, 1000);
    });
  }

  // Custom function 2
  async function2(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Function 2 executed');
      }, 2000);
    });
  }

  // Custom function 3
  async function3(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Function 3 executed');
      }, 3000);
    });
  }

  //if the functions do not depend on each other and can be run in parallel, using Promise.all can be
  //more efficient because it allows for concurrent execution. However, if the functions need to be run
  //in a specific order, then they should be awaited sequentially

  // Function to handle promises
  async executePromisesSequentially(): Promise<{
    result1: string;
    result2: string;
    result3: string;
  }> {
    try {
      const result1 = await this.function1();
      console.log(result1);

      const result2 = await this.function2();
      console.log(result2);

      const result3 = await this.function3();
      console.log(result3);
      return { result1, result2, result3 };
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  }

  // Function to handle promises
  async executePromisesConcurrently(): Promise<{
    result1: string;
    result2: string;
    result3: string;
  }> {
    try {
      const [result1, result2, result3] = await Promise.all([
        this.function1(),
        this.function2(),
        this.function3(),
      ]);
      console.log(result1);
      console.log(result2);
      console.log(result3);
      return { result1, result2, result3 };
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  }
}
