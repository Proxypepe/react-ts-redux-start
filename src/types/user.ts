export enum UserActions {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUserAction {
    type: UserActions.FETCH_USERS;
}

interface FetchUserSuccessAction {
    type: UserActions.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface FetchUserErrorAction {
    type: UserActions.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction;

export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}
