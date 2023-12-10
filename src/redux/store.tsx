import {configureStore} from "@reduxjs/toolkit";
import ChartReducer from "@/src/redux/reducers/ChartReducer";
import AlbumReducer from "@/src/redux/reducers/AlbumReducer";

const store = configureStore({
    reducer: {
        charts: ChartReducer,
        album: AlbumReducer
    }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
