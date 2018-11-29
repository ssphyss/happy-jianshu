import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

// 搜尋框Focus
export const getSearchFocusAction = () => {
    // console.log('來自ac的：constants.SEARCH_FOCUS', constants.SEARCH_FOCUS)
    return {
        type: constants.SEARCH_FOCUS
    }
}

// 搜尋框Blur
export const getSearchBlurAction = () => ({
    type: constants.SEARCH_BLUR
})

// 搜尋框移入
export const getMouseEnterAction = () => {    
    return {
        type: constants.MOUSE_ENTER
    }
}

// 輸入框移出
export const getMouseLeaveAction = () => {    
    return {
        type: constants.MOUSE_LEAVE
    }
}

// 換頁
export const getChangePageAction = (page) => {    
    console.log('acPAge', page)
    return {
        type: constants.CHANGE_PAGE,
        page
    }
}

////////////////////////////////  Ajax  ////////////////////////////////
/**
 * page(告訴後端)：現在第幾頁
 * 每頁幾筆(看需求)：pageItems　(一次要15筆)
 * 總共幾筆(後端給)：totalItems (如共有123筆,可以去算總共有幾頁)
 * 總共幾頁(自己算)：totalPage: Math.ceil(data.length / 10筆)　= 頁
 * 總共幾頁(自己算)：totalPage：總筆數有123筆/15=9頁 
 */
// Ajax 獲取數據後發送action傳遞給reducer
// 派發計算的總頁數
export const getListAction = (data, totalItems) => {    
    return {
        type: constants.SEARCH_LIST,     
        data: fromJS(data),         // data 用immutable數據形式
        totalPage: Math.ceil(totalItems / 15)  // 取整
    }
}

// Ajax 獲取數據
// 因為加入redux-thunk 中間件所以可以在這裡做異步
export const getListAjax = (page, pageItems) => {
    console.log('做Ajax')
    return (dispatch) => {
        console.log(`page:${page}，pageItems:${pageItems}`)
        // 固定傳給後端頁碼&一頁有幾筆
        // let url = `https://easy-mock.com/mock/5bc846bd4ff7d608864c06b0/jianshuApi/searchMenuPage?page=${page}&&pageItems=${pageItems}`;
        // let url = `/api/SearchList.json`
        axios.get('/api/SearchList.json')
        // axios.get(url)
        .then((res)=>{
            console.log('Ajax得到數據：',res.data)
            const data = res.data.result.data;
            const totalItems = res.data.result.totalItems;
            // 派發action
            const action = getListAction(data, totalItems);
            dispatch(action)
         })
         .catch(()=>{alert('err')})
    }
}



