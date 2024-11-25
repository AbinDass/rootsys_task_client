import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    data: [],
    Tokens: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload, `from redux`);
            state.data = [action.payload.userData];
            state.Tokens = action.payload.Tokens;
        },

        removeUser: (state) => {
            state.data = [];
            state.Tokens = "";
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
