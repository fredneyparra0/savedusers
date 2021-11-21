import { Action } from '@ngrx/store';
import { SAVEUSER, UserActions } from './userAction';

const initialState: UserInterface[] = []; 

export interface UserInterface {
    name: string,
    email: string,
    country: string
}

/* export function userReducer ( state: UserInterface[] = initialState, action: UserActions ): any {

    switch (action.type) {
            return [...state, action.value];
        default: 
            return state;
    }
} */

export function userReducer <UserInterface[],UserActions extends Action>(state:UserInterface[],action:UserActions) {
    switch (action.type) {
        case SAVEUSER:
            return [...state, action.value];
        default: 
            return state;
    }
}