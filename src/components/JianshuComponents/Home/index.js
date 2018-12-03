// import React from 'react';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import HomeBanner from './HomeBanner';
import HomeTopic from './HomeTopic';
import HomeArticle from './HomeArticle';
import HomeRecommend from './HomeRecommend';
import HomeWriter from './HomeWriter';
import HomeDownloadApp from './HomeDownloadApp';
import { /*WrapperHome, WrapperHome__left, WrapperHome__right*/ } from './style'
import { BackToTop } from './style'
// import axios from 'axios';
import { actionCreators } from './store';

class Home extends PureComponent{

    // 2.
    handleGoTop(){
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div className='container'>
                <div className='left'>
                    <HomeBanner />
                    <HomeTopic />
                    <HomeArticle />
                </div>
                <div className='right'>
                    <HomeRecommend />
                    <HomeDownloadApp />
                    <HomeWriter />                    
                </div>     
                {
                    this.props.showScroll? <BackToTop onClick={this.handleGoTop}>Top</BackToTop>: null   
                }
                {/* <BackToTop onClick={this.handleGoTop}>Top</BackToTop>        */}
            </div>
        )
     }

    // 構建一個action
    // 派發給store
    // 透過dispatch方法
    // 先connect
    // 調用changeHomeData方法
    // 傳遞action給changeHomeData方法
    // 這個方法就能接收到
    // changeHomeData(action)
    // 然後就可以dispatch(action)發給store
    // store會轉發給大reducer
    // 大reducer接收到,小reducer就能接收到
    
    // componentDidMount(){
    //     //================1.在生命週期內請求=====================
    //     //  axios.get('./api/home.json')
    //     //  .then((res)=>{
    //     //      console.log('Ajax請求',res.data);
    //     //      const result = res.data.result
    //     //      const action = {
    //     //          type: 'CHANGE_HOME_DATA',
    //     //          homeTopic: result.homeTopic,
    //     //          homeArticle: result.homeArticle,
    //     //          homeRecommend: result.homeRecommend,
    //     //          homeWriter: result.homeWriter
    //     //      }
    //     //      this.props.changeHomeData(action)
    //     //  })
    //     //  this.props.changeHomeData();
    // }
    componentDidMount(){
         this.props.changeHomeData();
         this.bindEvents();
    }
    componentDWillUnmount(){
        console.log('OK');
         window.removeEventListener('scroll', this.props.handleShowTop)
    }

    bindEvents(){
        window.addEventListener('scroll', this.props.handleShowTop)
    }
}
// export default Home
// 組件要做連接時接收兩個參數
// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
// 讓容器組件做處理
// 組件要做連接時接收兩個參數
// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home','showScroll'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        changeHomeData(){
            // //================2.在connect內請求=====================
            // axios.get('./api/home.json')
            // .then((res)=>{
            //     console.log('Ajax請求',res.data);     
            //     const data = res.data.result;
            //     const action = {
            //         type: 'CHANGE_HOME_DATA',
            //         homeTopic: data.homeTopic,
            //         homeArticle: data.homeArticle,
            //         homeRecommend: data.homeRecommend,
            //         homeWriter: data.homeWriter
            //     }
            //     dispatch(action);
            // })       

            // 如果api設定三個就會跑3個action  
            const action = actionCreators.getHomeAjax();
            dispatch(action);
        },
        handleShowTop(){
            // console.log(e)
            console.log('scroll滾輪',document.documentElement.scrollTop);
            const scrolls = document.documentElement.scrollTop
            if (scrolls > 100) {
                const action1 = actionCreators.getShowGoTop(true);
                dispatch(action1);
            }else {
                const action2 = actionCreators.getShowGoTop(false);
                dispatch(action2);
            }
        }
        
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Home);