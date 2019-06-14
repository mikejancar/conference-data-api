export interface Session {
  id: number;
  name: string;
  description: string;
  startsAt: Date;
  endsAt: Date;
  presenters: string[];
}
