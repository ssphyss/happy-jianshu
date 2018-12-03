// import React from 'react';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WrapperHomeTopic, Item } from './style'
// import homeTopic01 from './../../../../assets/homeTopic/01.jpg';
// import homeTopic02 from './../../../../assets/homeTopic/02.jpg';
// import homeTopic03 from './../../../../assets/homeTopic/03.jpg';
// import homeTopic04 from './../../../../assets/homeTopic/04.jpg';
// import homeTopic05 from './../../../../assets/homeTopic/05.jpg';
// import homeTopic06 from './../../../../assets/homeTopic/06.jpg';

class HomeTopic extends PureComponent{
    render(){
        return(
            <WrapperHomeTopic>
                {
                    this.props.homeTopic.map((item, index)=>{
                        return (
                            <Item key={item.get('id')}>
                                <img src={item.get('imgUrl')} alt=''/>
                                {item.get('title')}
                            </Item>
                        )
                    })
                }
                {/* <Item><img src={homeTopic01}/>繪本</Item>
                <Item><img src={homeTopic02}/>區塊鏈</Item>
                <Item><img src={homeTopic03}/>故事</Item>
                <Item><img src={homeTopic04}/>讀書</Item>
                <Item><img src={homeTopic05}/>自然科普</Item>
                <Item><img src={homeTopic06}/>攝影</Item> */}
                <a href='/'>更多熱門專題<i className="iconfont">&#xe6f5;</i></a>
            </WrapperHomeTopic>
        )
     }
}

// export default HomeTopic
// 組件要做連接時接收兩個參數
// 把倉庫裡的focused( 即state.focused)映射到組件的props的focused
const mapStateToProps = (state) => {
    return {
        //focused: state.focused
        homeTopic: state.getIn(['home','homeTopic'])
    }
}

export default connect(mapStateToProps, null)(HomeTopic);