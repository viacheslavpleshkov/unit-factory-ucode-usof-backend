import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {

  findAll(): string {
    return 'Hello World!';
  }

  findOne(): string {
    return 'Hello World!';
  }

  create() {
    return 'Hello World!';
  }

  update() {
    return 'Hello World!';
  }

  remove(): string {
    return 'Hello World!';
  }
}
