// import React from 'react';
import React, { PureComponent } from 'react';
import downloadApp from './../../../../assets/homeDownloadApp/qrcode.png';
import './index.scss';

class HomeDownloadApp extends PureComponent{
    render(){
        return(
            <div className='downloadBox'>
                <div className='downloadImg'>
                    <img src={downloadApp} alt=""/>
                </div>   
                <div className='downloadInfo'>
                    <a>下載簡書手機App</a>
                    <span>隨時隨地發現和創作內容</span>
                </div>
                
            </div>
        )
     }
}
export default HomeDownloadApp