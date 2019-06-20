import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getAppRoot(): string {
    return 'The Conference Data API is operational';
  }
}
