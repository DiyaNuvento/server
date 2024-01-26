import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('promises/sequential')
  executePromisesSequentially() {
    return this.appService.executePromisesSequentially();
  }

  @Get('promises/concurrent')
  executePromisesConcurrently() {
    return this.appService.executePromisesConcurrently();
  }
}
