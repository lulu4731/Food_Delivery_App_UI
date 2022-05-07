import { configureStore } from "@reduxjs/toolkit"
import tabReducers from "../reducers/tab"

const store = configureStore({
    reducer: {
        tabReducers
    }
})

export default store