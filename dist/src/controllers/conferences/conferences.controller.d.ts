import { Conference } from '../../models/conference.interface';
import { ConferenceDataService } from '../../services/conference-data/conference-data.service';
export declare class ConferencesController {
    private conferenceDataService;
    constructor(conferenceDataService: ConferenceDataService);
    getAllConferences(): Conference[];
    getConference(params: any): Conference;
}
