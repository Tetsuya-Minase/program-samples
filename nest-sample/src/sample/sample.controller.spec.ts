import { Test, TestingModule } from '@nestjs/testing';
import { SampleController } from './sample.controller';

describe('Sample Controller', () => {
  let controller: SampleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SampleController],
    }).compile();

    controller = module.get<SampleController>(SampleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
