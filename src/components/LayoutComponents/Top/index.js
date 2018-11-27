import React from 'react';
import { Wrapper__Top, Container, Top__Logo, Top__Nav, NavItem, Top__Search, SearchInput, Top__User, Button } from './style'
import { CSSTransition } from 'react-transition-group';
import './index.scss';

class Top extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            focused: false,
        }
        this.handleIntputFocus = this.handleIntputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
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
                        in={this.state.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <Top__Search className={this.state.focused ? 'focused': ''}>
                            <SearchInput 
                                onFocus={this.handleIntputFocus} 
                                onBlur={this.handleInputBlur}
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
    // 如：輸入框聚焦
    handleIntputFocus(e){
        // console.log(e.target)
        this.setState({
            focused: true
        })
    }
    // 如：輸入框Blur
    handleInputBlur(e){
        // console.log(e.target)
        this.setState({
            focused: false
        })
    }
}
export default Top