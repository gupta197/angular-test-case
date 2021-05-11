import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceMock {
    constructor() { }

    getUsers(): Array<{}> {
        return [
            {
                name: 'user1',
                email: 'ab@gmail.com',
                phone: '1234567890',
                password: '1235'
            }
        ];
    }
}
