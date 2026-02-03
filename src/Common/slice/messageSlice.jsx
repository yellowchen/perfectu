import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "message",
    initialState: [],
    reducers: {
        createMessage(state, action) {
            console.log(action.payload);
            if(action.payload.success) {
                state.push({
					id: action.payload.id,
					type: "success",
					title: "成功",
					text: action.payload.message,
				});
            }else {
                state.push({
					id: action.payload.id,
					type: "danger",
					title: "錯誤",
					text: Array.isArray(action.payload?.message)
						? action.payload?.message.join("\n")
						: action.payload?.message,
				});
            }

        },
        removeMessage(state, action) {
            const index = state.findIndex(item => item === action.payload);
            state.splice(index, 1);
        }
    }
})


export const createAsyncMessage = createAsyncThunk(
    "message/createAsyncMessage", async(payload, {dispatch, requestId}) => {
        dispatch(
            createMessage({
                ...payload,
                id: requestId,
            })
        );
        setTimeout(() => {
            dispatch(
                removeMessage(requestId)
            )
        }, 1500)
    }
);

export default messageSlice.reducer;
export const {createMessage, removeMessage} = messageSlice.actions;