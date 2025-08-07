import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: "message",
    initialState: [],
    reducers: {
        //方法
        createMessage(state, action) {
            console.log(action);
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
            // console.log(action.payload);
            const index = state.findIndex(item => item === action.payload);
            state.splice(index, 1);
        }
    }
})

//處理非同步行為
//createASyncThunk(自定義名稱, async(payload, params) => {})
export const createAsyncMessage = createAsyncThunk(
    "message/createAsyncMessage", async(payload, {dispatch, requestId}) => {
        console.log("createAsyncMessage: ", payload);
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
        }, 3000)
    } 
);

export default messageSlice.reducer;
export const {createMessage, removeMessage} = messageSlice.actions;