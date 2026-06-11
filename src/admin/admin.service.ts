import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  // Admin related business logic will be implemented here
  getAdmin(): object {
    return {
      name: 'admin',
      ID: 1,
    };
  }
}
