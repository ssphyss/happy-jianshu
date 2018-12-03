// import * as constants from './constants';
import { fromJS/*, Map*/ } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
    homeTopic: [],
    homeArticle: [],
    homeRecommend: [],
    homeWriter: [],
    homearticlePage: 1,
    homearticlePageItem: 15,
    showScroll: false

})
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            // console.log(action);
            // 轉成fromJS 的immutable對象
            // return state.set('homeTopic', fromJS(action.homeTopic)) 
            // .set('homeArticle', fromJS(action.homeArticle))
            // .set('homeRecommend', fromJS(action.homeRecommend))
            // .set('homeWriter', fromJS(action.homeWriter))
            return state.merge({
                homeTopic: fromJS(action.homeTopic),
                homeArticle: fromJS(action.homeArticle),
                homeRecommend: fromJS(action.homeRecommend),
                homeWriter: fromJS(action.homeWriter)
            })      
        // 閱讀更多 記得加上頁碼
        case constants.GET_MORE:
            // return state.set('homeArticle', state.get('homeArticle').concat(action.data)) 
            // .set('(action.nextPage))', (action.nextPage))
            return state.merge({
                homeArticle: state.get('homeArticle').concat(action.data),
                homearticlePage: action.nextPage
            })  
        // ToTop
        case constants.TO_TOP:
            // return state.set('homeArticle', state.get('homeArticle').concat(action.data)) 
            // .set('(action.nextPage))', (action.nextPage))
            return state.merge({                
                showScroll: action.show
            }) 
        
        default:
            return state;
    }
    return state;
}