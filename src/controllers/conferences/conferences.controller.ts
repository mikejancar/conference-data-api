import { Controller, Get, Param } from '@nestjs/common';
import { Conference } from '../../models/conference.interface';
import { ConferenceDataService } from '../../services/conference-data/conference-data.service';

@Controller('conferences')
export class ConferencesController {
  constructor(private conferenceDataService: ConferenceDataService) {}

  @Get()
  getAllConferences(): Conference[] {
    return this.conferenceDataService.getAllConferences();
  }

  @Get(':id')
  getConference(@Param() params): Conference {
    return this.conferenceDataService.getConference(parseInt(params.id, 10));
  }
}
