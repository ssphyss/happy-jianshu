// import React from 'react';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WrapperHomeArticle, ListItem, ListInfo, LoadMore } from './style';
// import article01 from './../../../../assets/homeArticle/01.jpg';
import { actionCreators } from './../store';
import { Link } from 'react-router-dom';
class HomeArticle extends PureComponent{
    
    render(){
        const aa = this.props.homeArticle.toJS
        console.log('123',aa)
        return(
            <WrapperHomeArticle>
                {
                    this.props.homeArticle.map((item, index)=>{
                        return (
                            <Link key={index} to='/detail'>
                            {/* <ListItem key={item.get('id')} > 發生重複key暫時先改成index */}
                            {/* <ListItem key={index} > 發生重複key暫時先改成index */}
                            <ListItem >
                                <img src={item.get('imgUrl')} alt="" />
                                <ListInfo className='listInfo' >
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('desc')}</p>
                                    <p>
                                        <span>nmyanwensheng</span>
                                        <span>回應123</span>
                                        <span>喜愛456</span>
                                    </p>
                                </ListInfo>                                
                            </ListItem>
                            </Link>
                        )
                    })
                }
                {/* 請求時記得帶頁碼參數.reducer也要先定義好 */}
                <LoadMore onClick={()=>this.props.handleGetMore(this.props.homearticlePage)}>閱讀更多</LoadMore>
                {/* <ListItem>
                    <img src={list01} alt=""/>
                    <ListInfo className='listInfo'>
                        <h3>日更練字</h3>
                        <p>日更練字人說萬事開頭難，其實不然。練字半年，越看越不順眼。我倒是想說，凡事要趁早，特別是學習這事。</p>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <img src={article01} alt=""/>
                    <ListInfo className='listInfo'>
                        <h3>日更練字</h3>
                        <p>日更練字人說萬事開頭難，其實不然。練字半年，越看越不順眼。我倒是想說，凡事要趁早，特別是學習這事。</p>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <img src={article01} alt=""/>
                    <ListInfo className='listInfo'>
                        <h3>日更練字</h3>
                        <p>日更練字人說萬事開頭難，其實不然。練字半年，越看越不順眼。我倒是想說，凡事要趁早，特別是學習這事。</p>
                    </ListInfo>
                </ListItem> */}
                {/* <ListItem>                            
                    <InfoBox>
                        <img className='pic' src={item.get('imgUrl')} alt=""/>
                        <ListInfo>
                            <h3 className='title' >{item.get('title')}</h3>                              
                            <p className='desc'>{item.get('desc')}
                            </p>
                        </ListInfo>
                    </InfoBox>                
                    <ListMeta>
                        <MetaItem>grain先森</MetaItem>
                        <MetaItem>回應123</MetaItem>
                        <MetaItem>喜愛456</MetaItem>
                    </ListMeta>
                </ListItem> */}
            </WrapperHomeArticle>
        )
     }
}
// export default HomeArticle
// 組件要做連接時接收兩個參數
// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
const mapStateToProps = (state) => {
    return {
        //focused: state.focused
        homeArticle: state.getIn(['home','homeArticle']),
        homearticlePage: state.getIn(['home','homearticlePage'])
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        // 閱讀更多
        handleGetMore(page){
            const action = actionCreators.getMoreAction(page);
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(HomeArticle);

