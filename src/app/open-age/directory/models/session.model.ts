import { User } from '.';

export class Session {
    id: string;
    app: string;
    status: string;
    user: User;
    timeStamp: Date;
}
