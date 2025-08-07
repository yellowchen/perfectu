import {createContext} from "react";

// A.useContext 跨元件傳遞 
// (在最外層引用<MessageContext.Provider value={}>)
export const MessageContext = createContext({});

// 初始化狀態
export const initState = {
    type: "",  //視窗外觀(顏色)
    title: "",
    text: ""
};

// B.reducer 建立方法
export const messageReducer = (state, action) => {
    switch(action.type) {
        case "POST_MESSAGE":  //新增訊息
            return {
                ...action.payload
            }
        case "CLEAR_MESSAGE":  //刪除訊息(在<Message>中有設定，要有message.title才能正常顯示訊息)
            return {
                ...initState
            }
        default:
            return state
    }
}

//觸發狀態的更新
//新增訊息: 更新成功訊息
export function handleSuccessMessage(dispatch, res) {
    dispatch({
        type: "POST_MESSAGE",
        payload: {
            type: "success",
            title: "更新成功",
            text: res.data.message
        }
    })
    setTimeClear(dispatch);
}

//新增訊息: 更新失敗訊息
export function handleErrorMessage(dispatch, err) {
    dispatch({
        type: "POST_MESSAGE",
        payload: {
            type: "danger",
            title: "更新失敗",
            text: Array.isArray(err?.response?.data?.message)
                ? err?.response?.data?.message.join('\n')
                : err?.response?.data?.message
        }
    })
    setTimeClear(dispatch);
}

//新增訊息: 刪除成功訊息
export function deleteSuccessMessage(dispatch, res) {
    dispatch({
        type: "POST_MESSAGE",
        payload: {
            type: "success",
            title: "刪除成功",
            text: res.data.message
        }
    })
    setTimeClear(dispatch);
}


//新增訊息: 更新尚未儲存訊息
// export function handleNotSavedMessage(dispatch) {
//     dispatch({
//         type: "POST_MESSAGE",
//         payload: {
//             type: "danger",
//             title: "更新尚未儲存",
//             text: "更新的內容尚未儲存，仍確定關掉視窗"
//         }
//     })
//     setTimeClear(dispatch);
// }


function setTimeClear(dispatch) {
    setTimeout(() => {
		dispatch({
			type: "CLEAR_MESSAGE",
		});
	}, 3000);
}

