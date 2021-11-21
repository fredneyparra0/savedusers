import { Action } from "@ngrx/store";
import { UserInterface } from "./userReducer";

export const SAVEUSER = '[ user ] save user';

export class SaveUserAction implements Action {

    readonly type = SAVEUSER;
    value: UserInterface[] = [{ name: 'fredney', email: 'fredneyparra0@gmail.com', country: 'merida' }]
    constructor () {}

}

export type UserActions = SaveUserAction;