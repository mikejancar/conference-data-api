import { Test, TestingModule } from '@nestjs/testing';
import { ConferenceDataService } from '../../services/conference-data/conference-data.service';
import { ConferencesController } from './conferences.controller';

describe('Conferences Controller', () => {
  let controller: ConferencesController;

  beforeEach(async () => {
    const conferenceDataService = new ConferenceDataService();
    controller = new ConferencesController(conferenceDataService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
