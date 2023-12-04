import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [],
    note: ""
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        handleSubmit: () => {
            state.notes = [...state.notes, actions.payload]
            localStorage.setItem("notes", JSON.stringify(state.notes))
        },
        handleDelete: () => {
            state.notes = state.notes.filter(note => note.id !== actions.payload)
            localStorage.setItem("notes", JSON.stringify(state.notes))
        }
    }
})

export const {handleDelete, handleSubmit} = todoSlice.actions
export default todoSlice.reducer