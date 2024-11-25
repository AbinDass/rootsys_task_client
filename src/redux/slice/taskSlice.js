import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   tasks:[],
};

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setTask: (state, action) => {
            
            state.tasks = [action.payload]; 
        },

        updateTask: (state, action) => {
            const updatedTask = action.payload;
            state.tasks = state.tasks.map((task) =>
                task._id === updatedTask._id ? updatedTask : task
            );
        },

        removeTask: (state, action) => {
            const taskId = action.payload; 
            state.tasks = state.tasks.map((taskList) => 
                taskList.filter((task) => task._id !== taskId)
            );

        },
    },
});

export const { setTask,updateTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
