import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup(dto: AuthDto) {
    return 'I am signed up >>>>>>>>>>>>>>>>>>>>>';
  }
  signin() {
    return 'I am signed in >>>>>>>>>>>>>>>>>';
  }
}
