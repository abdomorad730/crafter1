import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('hello')
  getHi(): string {
    return this.appService.getHi();
  } 
  @Get('profile')
  getProfile(): string {
    return this.appService.getProfile();
  }
}
