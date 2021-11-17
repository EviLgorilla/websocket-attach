import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Notification {
    date: string,
    title: string,
    message: string
}

export interface UserState {
    firstName: string,
    lastName: string,
    notification: Array<Partial<Notification>>
}

const initialState = {
    firstName: '',
    lastName: '',
    notification: []
} as UserState

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser(store, action: PayloadAction<UserState>) {
            return { ...store, ...action.payload};
        },
        clearUser() {
            return initialState;
        },
        updateNotification(store, action: PayloadAction<Notification>) {
            return { ...store, notification: [ ...store.notification, action.payload]}
        }
    }
});

export const { updateUser, clearUser, updateNotification } = userSlice.actions;

export default userSlice.reducer;
