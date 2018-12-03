import * as constants from './constants';
import { fromJS/*, Map*/ } from 'immutable';

const defaultState = fromJS({
    detailTitle: '',
    detailContent: ''
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                detailTitle: action.title,
                detailContent: action.content
            });
        default:
            return state;
    }
}
