import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { Wrapper__Top, Container, Top__Logo, Top__Nav, NavItem, Top__Search, SearchInput, Top__User, Button, SearchInfo, SearchInfoTitle, SearchInfoItem } from './style'
import { CSSTransition } from 'react-transition-group';
import './index.scss';

class Top extends React.Component{

    render(){

        const { focused, page, pageItems, totalPage } = this.props;

        ///////////////////////////////// 換頁/////////////////////////////////
        // 第1頁顯示0~09
        // 第2頁顯示11~19 
        const newList = this.props.list.toJS();  // 把 list的Iimmutable數組轉成普通 JS 數組 newList = 47筆        
        const showList = [];  // 將要顯示的清單

		if (newList.length) {   // 如果有資料才會做循環,不然一開始會有10次undefined
			for (let i = (page - 1) * 10; i < page * 10 && i < newList.length; i++) {
				// console.log('這是i',i,newList[i]);
				showList.push(
					<SearchInfoItem key={newList[i]}>
						{newList[i]}
					</SearchInfoItem>
				)
			}
		}
        
        ///////////////////////////////// 搜尋框區域///////////////////////////////// 
        // 如果show是true就顯示,否則不顯示
        // show的參數帶this.props.focused
        // { getSearchInfoShow(this.props.focused) }
        const getSearchInfoShow = () => {
            if(this.props.focused || this.props.mouseIn){
                console.log('page這裡!!!!',page)
                return(
                    <SearchInfo>
                        <SearchInfoTitle>
                            <span>熱門搜索</span>
                            <button
                                // onClick={()=>this.props.handleChangePage(page, totalPage)
                                onClick={()=>this.props.handleChangePage(page, totalPage, this.iconfont)
                            }
                            >
                                <i 
                                    // ref可以獲取js真實DOM的DOM節點
                                    // 透過真實DOM節點去改變它的CSS樣式旋轉
                                    ref={(icon)=>{ this.iconfont = icon }}
                                    className="iconfont">&#xe6dd;
                                </i>
                                換一批
                            </button>
                        </SearchInfoTitle>
                        <div>
                            {showList}
                            {/* 這裡接收的list是immutable數據形式 */}
                            {/* {
                                this.props.list.map((item, index)=>{
                                    return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                })
                            } */}
                            {/* <SearchInfoItem>行距杯2018徵文</SearchInfoItem>
                            <SearchInfoItem>區塊練</SearchInfoItem>
                            <SearchInfoItem>小程序</SearchInfoItem>
                            <SearchInfoItem>vue</SearchInfoItem>
                            <SearchInfoItem>畢業</SearchInfoItem>
                            <SearchInfoItem>PHP</SearchInfoItem>
                            <SearchInfoItem>flutetr</SearchInfoItem>
                            <SearchInfoItem>理財</SearchInfoItem>
                            <SearchInfoItem>美食</SearchInfoItem> */}
                        </div>
                    </SearchInfo> 
                )
            }else {
                return null;
            }
        }
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
                        <Top__Search
                            onMouseEnter={this.props.handleMouseEnter} 
                            onMouseLeave={this.props.handleMouseLeave}
                            className={this.props.focused ? 'focused': ''}>
                            <SearchInput    
                                // onFocus={()=>this.props.handleSearchFocus(page, pageItems)}
                                // 當數據是0時候,再去請求Ajax
                                onFocus={()=>this.props.handleSearchFocus(page, pageItems, this.props.list)}
                                onBlur={this.props.handleSearchBlur}
                            />
                            <Button className='btn-search'><i className="iconfont">&#xe625;</i></Button>   
                            {/* <SearchInfo>
                                <SearchInfoTitle>
                                    <span>熱門搜索</span>
                                    <span><i className="iconfont">&#xe6dd;</i>換一批</span>
                                </SearchInfoTitle>
                                <div>
                                    <SearchInfoItem>行距杯2018徵文</SearchInfoItem>
                                    <SearchInfoItem>區塊練</SearchInfoItem>
                                    <SearchInfoItem>小程序</SearchInfoItem>
                                    <SearchInfoItem>vue</SearchInfoItem>
                                    <SearchInfoItem>畢業</SearchInfoItem>
                                    <SearchInfoItem>PHP</SearchInfoItem>
                                    <SearchInfoItem>flutetr</SearchInfoItem>
                                    <SearchInfoItem>理財</SearchInfoItem>
                                    <SearchInfoItem>美食</SearchInfoItem>
                                </div>
                            </SearchInfo>  */}
                            {/* { getSearchInfoShow(this.props.focused) } */}
                            { getSearchInfoShow() }
                        </Top__Search>     
                    </CSSTransition> 
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
}

// 組件要做連接時接收兩個參數
// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
const mapStateToProps = (state) => {
    return {
        // focused: state.top.focused
        // 改成用 immutable 數據形式
        // focused: state.top.get('focused')
        // focused: state.get('top').get('focused')
        focused: state.getIn(['top','focused']),
        mouseIn: state.getIn(['top', 'mouseIn']),
        list: state.getIn(['top','list']),
        page: state.getIn(['top','page']),
        pageItems: state.getIn(['top','pageItems']),
        totalPage: state.getIn(['top','totalPage']),
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        // // 搜尋框FOCUS,記得reducer要得到總頁數
        // handleSearchFocus(page, pageItems){
        //     console.log(`page:${page}，pageItems:${pageItems}`)
        //     const getList = actionCreators.getListAjax(page, pageItems);
        //     dispatch(getList);
        //     const action = actionCreators.getSearchFocusAction();
        //     dispatch(action);
        // },
        // 搜尋框FOCUS,記得reducer要得到總頁數
        // 改寫,當數據是0再去請求
        handleSearchFocus(page, pageItems, list){
            console.log(`page:${page}，pageItems:${pageItems}`)
            if(list.size === 0) {
                const getList = actionCreators.getListAjax(page, pageItems);
                dispatch(getList);
            }            
            const action = actionCreators.getSearchFocusAction();
            dispatch(action);
        },
        // 搜尋框FOCUS
        handleSearchBlur(){
            const action = actionCreators.getSearchBlurAction();
            dispatch(action);           
        },

        // 移入區域
        handleMouseEnter(){
            const action = actionCreators.getMouseEnterAction();
            dispatch(action);
        },

        // 移出區域
        handleMouseLeave(){
            const action = actionCreators.getMouseLeaveAction();
            dispatch(action);
        },

        // 換頁 (須先知道當前頁和總頁數)
        handleChangePage(page, totalPage, icon){
            
             //////////// 原生js獲取css樣式的語法/////////////
             console.log('原生js獲取css樣式icon', icon);
             // icon.style.transform = 'rotate(360deg)'
             let originDeg = icon.style.transform.replace(/[^0-9]/ig, '')
             if (originDeg) {
                 originDeg = parseInt(originDeg, 10);
             }else {
                 originDeg = 0;
             }
             console.log('originDeg：', originDeg)
             icon.style.transform = `rotate(${originDeg+360}deg)`;


            // console.log('換頁page,totalPage', page,totalPage)
            // 當前在第一頁,就+1到下一頁
            if(page < totalPage) {
                const action = actionCreators.getChangePageAction( page + 1);
                // console.log('//////page,totalPage', page,totalPage)
                dispatch(action);
            // 否則(表示在最後一頁)就回到第一頁
            }else {
                const action = actionCreators.getChangePageAction(1);
                dispatch(action);
            }

        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Top);
// export default Top
