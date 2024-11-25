import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from "./slice/userSlice";
import { taskSlice } from "./slice/taskSlice";

const persistConfig = { key: "user", storage, version: 1 };
const UserpersistedReducer = persistReducer(persistConfig, userSlice.reducer);

const persistConfigtask = { key: "task", storage, version: 1 };
const taskpersistedReducer = persistReducer(persistConfigtask, taskSlice.reducer);

const rootReducer = combineReducers({
    user: UserpersistedReducer,
    task: taskpersistedReducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
