import {combineReducers,legacy_createStore as createStore} from 'redux';
import {postsReducer} from './posts-reducer';


const rootReducer = combineReducers({posts: postsReducer})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>