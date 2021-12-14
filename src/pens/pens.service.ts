import { Injectable } from '@nestjs/common';
import { Pen } from './interfaces/pen.interface';

@Injectable()
export class PensService {
  private readonly pens: Pen[] = [];

  create(pen: Pen) {
    this.pens.push(pen);
  }

  findAll(): Pen[] {
    return this.pens;
  }
}
