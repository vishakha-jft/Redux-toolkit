import { createSlice, current } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name:'users',
    initialState:{
        user: [],
    },
    reducers:{
        adduser: (state,action ) => {
            console.log('asdd');
            state.user=[...state.user,action.payload]
        },
        updateuser: (state,action ) => {
            console.log("uppp");
            console.log(current(state.user));
            state.user[0]=action.payload;
        },
    },
});

export const { adduser,updateuser } = userSlice.actions;

export const selectUser = (state) => state.user;
export default userSlice.reducer;