import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClientManager } from '../database/prisma-client-manager';

describe('PrismaManagerService', () => {
  let service: PrismaClientManager;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaClientManager],
    }).compile();

    service = module.get<PrismaClientManager>(PrismaClientManager);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
