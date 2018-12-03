// import { combineReducers } from 'redux';
// // import topReducer from './../components/LayoutComponents/Top/store/reducer';
// import { reducer as topReducer } from './../components/LayoutComponents/Top/store';
// const reducer = combineReducers({
//     top: topReducer
// })

// export default reducer;


// import { combineReducers } from 'redux';
// 引用redux-immutable
import { combineReducers } from  'redux-immutable';
import { reducer as topReducer } from './../components/LayoutComponents/Top/store';
import { reducer as homeReducer } from './../components/JianshuComponents/Home/store';
import { reducer as detailArticleReducer } from './../components/JianshuComponents/DetailArticle/store';

const reducer = combineReducers({
    top: topReducer,
    home: homeReducer,
    detailArticle: detailArticleReducer
})

export default reducer;


















// 全部移到Top的reducer
// const defaultState = {
//     focused: false,
//     inputValue: '123',
//     list: [1,2]
// }
// export default (state = defaultState, action) => {
//     // 輸入框變化
//     // console.log('reducer',state, action);
//     if (action.type === 'CHANGE_INPUT_FOCUS') {
//         return {
//             focused: true
//         };
//     }
//     if (action.type === 'CHANGE_INPUT_BLUR') {
//         return {
//             focused: false
//         };
//     }
//     return state;
// }