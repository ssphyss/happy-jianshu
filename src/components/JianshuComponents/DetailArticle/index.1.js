import React from 'react';
import { connect } from 'react-redux';
import { WrapperDetailArticle, DetailLeft, DetailRight, DetailHeader, DetailContent } from './style';
import banner from './../../../assets/detail/detail_banner01.png';
import { actionCreators } from './store';
class DetailArticle extends React.Component{
    render(){
        return(
            <WrapperDetailArticle>
                <div className='container'>
                    <DetailLeft>
                        <DetailHeader>{this.props.title}</DetailHeader>
                        <DetailContent dangerouslySetInnerHTML={{__html: this.props.detailContent}}>
                            {/* {this.props.detailContent}  不轉譯 */}
                        </DetailContent> 
                    </DetailLeft>
                    {/* <DetailLeft>
                        <DetailHeader>“寂静”的宇宙</DetailHeader>
                        <DetailContent>
                            <img src='http://upload-images.jianshu.io/upload_images/12961714-3318dd46510b0806.jpg' alt=''/>
                            <p>
                                曾幾何時啊，我們每個人都想過我們的世界究竟在哪，
                                地球之外又是什麼，我們究竟又是怎樣地存在。
                                從138.2億年前的宇宙大爆炸開始，經過了百億年的冷卻才創就出了我們現在所觀測出的宇宙，
                                瑰麗的星雲，獨一無二的星球，更多的是它那令人費解卻又不可思議的運行法則，
                                例如三星系統，四星系統，五星系統，六星系統……當然也有更為壯麗的運行系統，
                                你可以將它想像成如同三體中的那樣……
                            </p>
                            <p>
                                曾幾何時啊，我們每個人都想過我們的世界究竟在哪，
                                地球之外又是什麼，我們究竟又是怎樣地存在。
                                從138.2億年前的宇宙大爆炸開始，經過了百億年的冷卻才創就出了我們現在所觀測出的宇宙，
                                瑰麗的星雲，獨一無二的星球，更多的是它那令人費解卻又不可思議的運行法則，
                                例如三星系統，四星系統，五星系統，六星系統……當然也有更為壯麗的運行系統，
                                你可以將它想像成如同三體中的那樣……
                            </p>
                            <p>
                                曾幾何時啊，我們每個人都想過我們的世界究竟在哪，
                                地球之外又是什麼，我們究竟又是怎樣地存在。
                                從138.2億年前的宇宙大爆炸開始，經過了百億年的冷卻才創就出了我們現在所觀測出的宇宙，
                                瑰麗的星雲，獨一無二的星球，更多的是它那令人費解卻又不可思議的運行法則，
                                例如三星系統，四星系統，五星系統，六星系統……當然也有更為壯麗的運行系統，
                                你可以將它想像成如同三體中的那樣……
                            </p>
                        </DetailContent> 
                    </DetailLeft> */}
                    <DetailRight>
                        <img src={banner} alt=''/>
                    </DetailRight> 
                </div>                
            </WrapperDetailArticle>
        )
     }
     componentDidMount(){
         this.props.handleDetailArticle();
     }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detailArticle','detailTitle']),
        detailContent: state.getIn(['detailArticle','detailContent'])
    }
}
const mapDispathToProps = (dispatch) => {
    return {        
        handleDetailArticle(){
            const action = actionCreators.getDetailAjax();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(DetailArticle);