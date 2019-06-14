import { Module } from '@nestjs/common';
import { ConferencesController } from './controllers/conferences/conferences.controller';
import { SessionsController } from './controllers/sessions/sessions.controller';
import { ConferenceDataService } from './services/conference-data/conference-data.service';

@Module({
  imports: [],
  controllers: [ConferencesController, SessionsController],
  providers: [ConferenceDataService],
})
export class AppModule {}
