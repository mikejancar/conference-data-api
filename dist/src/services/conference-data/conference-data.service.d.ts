import { Conference } from '../../models/conference.interface';
export declare class ConferenceDataService {
    private conferenceData;
    constructor();
    getAllConferences(): Conference[];
    getConference(id: number): Conference;
}
