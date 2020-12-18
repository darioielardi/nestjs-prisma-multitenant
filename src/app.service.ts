import { Injectable } from '@nestjs/common';
import { Note, PrismaClient } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaClient) {}

  async findNotes(): Promise<Note[]> {
    return this.prisma.note.findMany();
  }
}
