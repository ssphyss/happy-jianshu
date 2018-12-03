// import * as constants from './constants';
import { fromJS/*, Map*/ } from 'immutable';
import homeTopic01 from './../../../../assets/homeTopic/01.jpg';
import homeTopic02 from './../../../../assets/homeTopic/02.jpg';
import homeTopic03 from './../../../../assets/homeTopic/03.jpg';
import homeTopic04 from './../../../../assets/homeTopic/04.jpg';
import homeTopic05 from './../../../../assets/homeTopic/05.jpg';
import homeTopic06 from './../../../../assets/homeTopic/06.jpg';
import homeArticle01 from './../../../../assets/homeArticle/01.jpg';
import homeArticle02 from './../../../../assets/homeArticle/02.jpg';
import homeRecommend01 from './../../../../assets/homeRecommend/01.png';
import homeRecommend02 from './../../../../assets/homeRecommend/02.png';
import homeRecommend03 from './../../../../assets/homeRecommend/03.png';
import homeRecommend04 from './../../../../assets/homeRecommend/04.png';
import homeRecommend05 from './../../../../assets/homeRecommend/05.png';
import homeWriter01 from './../../../../assets/homeWriter/01.jpg';
import homeWriter02 from './../../../../assets/homeWriter/02.jpg';
import homeWriter03 from './../../../../assets/homeWriter/03.jpg';
import homeWriter04 from './../../../../assets/homeWriter/04.jpg';

const defaultState = fromJS({
    homeTopic: [
        {
            id: 1,
            title: '繪本',
            imgUrl: homeTopic01
        },
        {
            id: 2,
            title: '區塊鏈',
            imgUrl: homeTopic02
        },
        {
            id: 3,
            title: '故事',
            imgUrl: homeTopic03
        },
        {
            id: 4,
            title: '讀書',
            imgUrl: homeTopic04
        },
        {
            id: 5,
            title: '自然科普',
            imgUrl: homeTopic05
        },
        {
            id: 6,
            title: '攝影',
            imgUrl: homeTopic06
        }
    ],
    homeArticle: [
        {
            id: 1,
            title: '日更練字',
            desc: '日更練字人說萬事開頭難，其實不然。練字半年，越看越不順眼。我倒是想說，凡事要趁早，特別是學習這事。',
            imgUrl: homeArticle01
        },
        {
            id: 2,
            title: '微小說（應聘）',
            desc: '某公司經理招一名司機。應聘者3人，副總說“明天8點來公司，張總要見見你們。 第二天3個人剛到公司門口，一位老人急匆匆向他們走來。 “小伙子去火...。',
            imgUrl: homeArticle02
        }
    ],
    homeRecommend: [
        {
            id: 1,
            imgUrl: homeRecommend01
        },
        {
            id: 2,
            imgUrl: homeRecommend02
        },
        {
            id: 3,
            imgUrl: homeRecommend03
        },
        {
            id: 4,
            imgUrl: homeRecommend04
        },
        {
            id: 5,
            imgUrl: homeRecommend05
        }
    ],
    homeWriter: [
        {
            id: 1,
            title: '星星有多遠',
            desc1: '寫了387.6k',
            desc2: '1.1k',
            imgUrl: homeWriter01
        },
        {
            id: 2,
            title: '星星有多遠',
            desc1: '寫了387.6k',
            desc2: '1.1k',
            imgUrl: homeWriter02
        },
        {
            id: 3,
            title: '星星有多遠',
            desc1: '寫了387.6k',
            desc2: '1.1k',
            imgUrl: homeWriter03
        },
        {
            id: 4,
            title: '星星有多遠',
            desc1: '寫了387.6k',
            desc2: '1.1k',
            imgUrl: homeWriter04
        }
    ]
})
export default (state = defaultState, action) => {
    return state;
}