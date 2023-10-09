import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Cart';
import productsReducer from './Products'


export const store = configureStore({
    reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type RootStateFn = typeof store.getState
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch