import axios from 'axios';
import * as constants from './constants';
import { fromJS/*, Map*/ } from 'immutable';

//================3.在actionCreator內請求=====================
export const getDetailAction = (title, content) => { 
    return {
        type: constants.CHANGE_DETAIL,
        title,
        content
    }
}

export const getDetailAjax = () => {
    return (dispatch) => {
        axios.get('/api/detail.json')
        .then((res)=>{ 
            console.log('Ajax請求',res.data);
            const data = res.data.result;
            // const title = data.detailTitle;
            // const content = data.detailContent;
            const action = getDetailAction(data.detailTitle, data.detailContent);
            dispatch(action)
         })
         .catch(()=>{alert('err')})
    }
}
