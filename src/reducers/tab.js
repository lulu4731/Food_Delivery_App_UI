import { createSlice } from "@reduxjs/toolkit";


const tab = createSlice({
    name: 'tab',
    initialState: {
        selectedTab: ''
    },
    reducers: {
        setSelectedTab(state, action) {
            state.selectedTab = action.payload
        }
    }
})

const tabReducers = tab.reducer

export const { setSelectedTab } = tab.actions
export const selectedTabSelector = state => state.tabReducers.selectedTab
export default tabReducers