import { createSlice } from "@reduxjs/toolkit"; 


const initialState={
    isDark :false

}

const themeSlice = createSlice({
    name:"theme",
    initialState,
    reducers:{
        clickDark:(state,action)=>{
            state.isDark=true


        },
        clickLight:(state,action)=>{
            state.isDark=false


        }
        
    }
})
export const {clickDark,clickLight}=themeSlice.actions
export default themeSlice.reducer