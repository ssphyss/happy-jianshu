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