import { Test, TestingModule } from '@nestjs/testing';
import { ConferenceDataService } from './conference-data.service';

describe('ConferenceDataService', () => {
  let service: ConferenceDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConferenceDataService],
    }).compile();

    service = module.get<ConferenceDataService>(ConferenceDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
