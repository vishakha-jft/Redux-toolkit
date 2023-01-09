import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../features/userSlice";
// import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';
// const persistConfig = {
//     key:'root',
//     storage
// }
const rootReducer = combineReducers({
    alluser: userReducer,
  })
// const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = configureStore({
    // reducer:{
    //     user: persistedReducer,        
    // },
    reducer:rootReducer,
    // reducer:persistedReducer,
    //middleware: [thunk]
})

// export const persistor = persistStore(store)