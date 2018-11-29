import React from 'react';
import { connect } from 'react-redux';
// import store from './../../../store';
// import * as actionCreators from './store/actionCreators';
import { actionCreators } from './store';
import { Wrapper__Top, Container, Top__Logo, Top__Nav, NavItem, Top__Search, SearchInput, Top__User, Button } from './style'
import { CSSTransition } from 'react-transition-group';
import './index.scss';

class Top extends React.Component{
    // constructor(props){
    //     super(props);
    //     // this.state = {
    //     //     focused: false,
    //     // }
    //     this.handleInputFocus = this.handleInputFocus.bind(this);
    //     this.handleInputBlur = this.handleInputBlur.bind(this);
    // }
   render(){
       return(           
            <Wrapper__Top>
                <Top__Logo />
                <Container>                    
                    <Top__Nav className='left'>
                        <NavItem className='active'><i className="iconfont iconfont--hide">&#xe71b;</i>首頁</NavItem>
                        <NavItem><i className="iconfont iconfont--hide">&#xe62a;</i>下載APP</NavItem> 
                    </Top__Nav>
                    <CSSTransition
                        in={this.props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <Top__Search className={this.props.focused ? 'focused': ''}>
                            <SearchInput 
                                onFocus={this.props.handleInputFocus} 
                                onBlur={this.props.handleInputBlur}
                            />
                            <Button className='btn-search'><i className="iconfont">&#xe625;</i></Button>                        
                        </Top__Search>     
                    </CSSTransition>               
                    {/* <Top__Nav className='right'>
                        <NavItem><i className="iconfont">&#xe636;</i></NavItem>
                        <NavItem>登錄</NavItem>
                    </Top__Nav>                 */}
                </Container> 
                <Top__User>  
                    <NavItem><i className="iconfont">&#xe636;</i></NavItem>
                    <NavItem>登錄</NavItem>
                    <Button className='btn-sub'>註冊</Button>
                    <Button className='btn-primary'><i className="iconfont">&#xe728;</i>寫文章</Button>
                </Top__User> 
            </Wrapper__Top>           
        )
    }
    // // 如：輸入框聚焦
    // handleInputFocus(e){
    //     // console.log(e.target)
    //     this.setState({
    //         focused: true
    //     })
    // }
    // // 如：輸入框Blur
    // handleInputBlur(e){
    //     // console.log(e.target)
    //     this.setState({
    //         focused: false
    //     })
    // }
}

// 組件要做連接時接收兩個參數
// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
const mapStateToProps = (state) => {
    return {
        // focused: state.top.focused
        // 改成用 immutable 數據形式
        // focused: state.top.get('focused')
        // focused: state.get('top').get('focused')
        focused: state.getIn(['top','focused'])
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        // // 輸入框FOCUS
        // handleInputFocus(){
        //     const action = {
        //         type: CHANGE_INPUT_FOCUS
        //     }
        //     store.dispatch(action);
        // },
        // // 輸入框Blur
        // handleInputBlur(){
        //     const action = {
        //         type: CHANGE_INPUT_BLUR
        //     }
        //     store.dispatch(action);
        // }

        // 輸入框FOCUS
        handleInputFocus(){
            const action = actionCreators.getInputFocusAction();
            dispatch(action);
        },

        // 輸入框FOCUS
        handleInputBlur(){
            const action = actionCreators.getInputBlurAction();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Top);
// export default Top
