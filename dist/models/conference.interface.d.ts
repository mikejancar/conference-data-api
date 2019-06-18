import { Session } from './session.interface';
export interface Conference {
    id: number;
    name: string;
    sessions: Session[];
}
