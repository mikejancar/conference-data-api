import { Controller, Get, Param } from '@nestjs/common';
import { Conference } from '../../models/conference.interface';
import { Session } from '../../models/session.interface';
import { ConferenceDataService } from '../../services/conference-data/conference-data.service';

@Controller('conferences/:id/sessions')
export class SessionsController {
  constructor(private conferenceDataService: ConferenceDataService) {}

  @Get()
  getAllSessions(@Param() params): Session[] {
    const conference: Conference = this.conferenceDataService.getConference(
      parseInt(params.id, 10),
    );
    return conference.sessions;
  }

  @Get(':sessionId')
  getSession(@Param() params): Session {
    const conference: Conference = this.conferenceDataService.getConference(
      parseInt(params.id, 10),
    );
    return conference.sessions.find(
      (session: Session) => session.id === parseInt(params.sessionId, 10),
    );
  }
}
