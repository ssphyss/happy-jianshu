// import React from 'react';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WrapperHomeRecommend, HomeRecommendItem } from './style'

class HomeRecommend extends PureComponent{
    render(){
        return(
            <WrapperHomeRecommend>
                {
                    this.props.homeRecommend.map((item, index)=>{
                        return (
                            <HomeRecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}>
                            </HomeRecommendItem>
                        )
                    })
                }
                {/* <HomeRecommendItem imgUrl=''></HomeRecommendItem> */}
            </WrapperHomeRecommend>
        )
     }
}
// export default HomeRecommend
// 組件要做連接時接收兩個參數
// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
const mapStateToProps = (state) => {
    return {
        homeRecommend: state.getIn(['home','homeRecommend'])
    }
}
export default connect(mapStateToProps, null)(HomeRecommend);