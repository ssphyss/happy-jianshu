import axios from 'axios';
import * as constants from './constants';
import { fromJS/*, Map*/ } from 'immutable';

//================3.在actionCreator內請求=====================
export const getHomeAction = (data) => { 
    return {
        type: constants.CHANGE_HOME_DATA,
        homeTopic: data.homeTopic,
        homeArticle: data.homeArticle,
        homeRecommend: data.homeRecommend,
        homeWriter: data.homeWriter
    }
}

// Ajax 獲取數據
// 因為加入redux-thunk 中間件所以可以在這裡做異步
export const getHomeAjax = () => {
    // console.log('做Ajax')
    return (dispatch) => {
        axios.get('/api/home.json')
        .then((res)=>{            
            console.log('Ajax請求',res.data);     
            const data = res.data.result;
            // const action = {
            //     type: 'CHANGE_HOME_DATA',
            //     homeTopic: data.homeTopic,
            //     homeArticle: data.homeArticle,
            //     homeRecommend: data.homeRecommend,
            //     homeWriter: data.homeWriter
            // }
            // dispatch(action);
            // 派發action
            const action = getHomeAction(data);
            dispatch(action)
         })
         .catch(()=>{alert('err')})
    }
}


//================HomeArticle組件的「閱讀更多」按鈕=====================
export const getHomeMoreAction = (data, nextPage) => { 
    return {
        type: constants.GET_MORE,
        data: fromJS(data.homeArticle),
        // 或 List同樣可以轉換成immutable數據
        // data: List(data.homeArticle)
        nextPage
    }
}

export const getMoreAction = (page) => {
    console.log('AAA')
    return (dispatch) => {
        axios.get('/api/homeMore.json?page=' + page)
        .then((res)=>{            
            // console.log('Ajax請求',res.data);     
            const data = res.data.result;
            // 派發action
            const action = getHomeMoreAction(data, page + 1);
            dispatch(action)
         })
         .catch(()=>{alert('err')})
    }
}



//================返回頂部功能=====================

// 輸入框改變
export const getShowGoTop = (show) => {    
    return {
        type: constants.TO_TOP,
        show
    }
}