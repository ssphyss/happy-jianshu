import React from 'react';
import './index.scss';

class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
                <div className="container">
                    <div className="div">
                        <a href='/'>關於簡書</a><em> · </em>
                        <a href='/'>聯絡我們</a><em> · </em>
                        <a href='/'>加入我們</a><em> · </em> 
                        <a href='/'>簡書出版</a><em> · </em><em> · </em> 
                        <a href='/'>品牌與微標</a> 
                        <a href='/'>幫助中心</a><em> · </em> 
                        <a href='/'>合作夥伴</a> 
                    </div>                    
                    <p>©2012-2018上海佰集信息科技有限公司/簡書/滬ICP備11018329號-5 / 滬公網安備31010402002252號/ 舉報電話：021-34770013</p>
                </div>
            </div>
        )
     }
}
export default Footer