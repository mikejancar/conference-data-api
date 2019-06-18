import { Injectable } from '@nestjs/common';
import { Conference } from '../../models/conference.interface';

import fs = require('fs');

@Injectable()
export class ConferenceDataService {
  private conferenceData: Conference[];

  constructor() {
    fs.readFile(
      './data/session-data.json',
      { encoding: 'utf-8' },
      (err, data) => {
        if (err) {
          this.conferenceData = [
            {
              id: 0,
              name: 'Conference data failed to load',
              sessions: [],
            },
          ];
          return;
        }
        const parsedData = JSON.parse(data);
        this.conferenceData = parsedData.conferences;
      },
    );
  }

  getAllConferences(): Conference[] {
    return this.conferenceData;
  }

  getConference(id: number): Conference {
    return this.conferenceData.find((conf: Conference) => conf.id === id);
  }
}
