import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World! This is my first Nest application. Let's gooooooooo!";
  }
}