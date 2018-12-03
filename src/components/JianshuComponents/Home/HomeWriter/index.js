// import React from 'react';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WrapperHomeWriter, HomeWriterItem, ImgBox, InfoBox } from './style';
// import homeWriter01 from './../../../../assets/homeWriter/01.jpg';

class HomeWriter extends PureComponent{
    render(){
        // console.log(this.props.homeWriter)
        // console.log(this.props.homeArticle)        
        return(
            <WrapperHomeWriter>
                {
                    this.props.homeWriter.map((item, index)=>{
                        return (
                            <HomeWriterItem key={item.get('id')}>
                                {/* <ImgBox imgUrl=''></ImgBox>  */}
                                <ImgBox><img src={item.get('imgUrl')} alt=''/></ImgBox> 
                                <InfoBox>
                                    <h3>{item.get('title')}</h3>
                                    <p>
                                        <span>{item.get('desc1')}字</span>
                                        <span>{item.get('desc2')}喜歡</span>
                                    </p>
                                    <a>+關注</a>
                                </InfoBox>
                            </HomeWriterItem>
                        )
                    })
                }
                {/* <HomeWriterItem>
                    <ImgBox imgUrl=''></ImgBox> 
                    <ImgBox><img src={homeWriter01} alt=''/></ImgBox> 
                    <InfoBox>
                        <h3>星星有多遠</h3>
                        <p>
                            <span>寫387.6字</span>
                            <span>1.1k喜歡</span>
                        </p>
                        <a>+關注</a>
                    </InfoBox>
                </HomeWriterItem> */}
            </WrapperHomeWriter>
        )
     }
}
// export default HomeWriter
// 組件要做連接時接收兩個參數
// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
const mapStateToProps = (state) => {
    return {
        //focused: state.focused
        homeWriter: state.getIn(['home','homeWriter']),
        homeArticle: state.getIn(['home','homeArticle'])

    }
}
export default connect(mapStateToProps, null)(HomeWriter);