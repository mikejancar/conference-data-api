import { Test, TestingModule } from '@nestjs/testing';
import { ConferenceDataService } from '../../services/conference-data/conference-data.service';
import { SessionsController } from './sessions.controller';

describe('Sessions Controller', () => {
  let controller: SessionsController;

  beforeEach(async () => {
    const conferenceDataService = new ConferenceDataService();
    controller = new SessionsController(conferenceDataService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
