import { Session } from '../../models/session.interface';
import { ConferenceDataService } from '../../services/conference-data/conference-data.service';
export declare class SessionsController {
    private conferenceDataService;
    constructor(conferenceDataService: ConferenceDataService);
    getAllSessions(params: any): Session[];
    getSession(params: any): Session;
}
