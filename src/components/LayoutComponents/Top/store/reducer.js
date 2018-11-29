import * as constants from './constants';
import { fromJS } from 'immutable';

// immutable 數據形式
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    pageItems: 15,
    totalItems: 1,     // 後端給105
    totalPage: 1       // 自己算105/15=7 得到計算的總頁數
})
export default (state = defaultState, action) => {
    // 改用switch
    switch(action.type) {

        // 移入Search框聚焦
        case constants.SEARCH_FOCUS:
            return state.set('focused', true); 

        // 移出Search框聚焦
        case constants.SEARCH_BLUR:
            return state.set('focused', false);

        // 移入Search框
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true); 

        // 移出Search框
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false); 

        // 獲取Ajax清單	
        case constants.SEARCH_LIST:
            console.log('得到計算的總頁數',action.totalPage)
            // return state.set('list', action.data).set('totalPage', action.totalPage);
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
        
        //換頁
        case constants.CHANGE_PAGE:
            // return state.set('page', 2);
            return state.set('page', action.page);
        
        default:
            return state;
    }
}


// export default (state = defaultState, action) => {
//     // 輸入框變化
//     // console.log('reducer',state, action);
//     // console.log('constants.SEARCH_FOCUS',constants.SEARCH_FOCUS);
//     // if (action.type === constants.SEARCH_FOCUS) {
//     //     return {
//     //         focused: true
//     //     };
//     // }
//     // if (action.type === constants.SEARCH_BLUR) {
//     //     return {
//     //         focused: false
//     //     };
//     // }

//     // 改成用 immutable 數據形式
//     // 移入Search框聚焦
//     // if (action.type === constants.SEARCH_FOCUS) {
//     //     return state.set('focused', true);        
//     // }
//     // 移出Search框聚焦
//     // if (action.type === constants.SEARCH_BLUR) {
//     //     return state.set('focused', false);        
//     // }
//     // 獲取Ajax清單	
//     // if (action.type === constants.SEARCH_LIST) {
//     //     // console.log('reducer得到數據：',action,state) 
//     //     return state.set('list', action.data)       
//     // }
//     // return state;
// }