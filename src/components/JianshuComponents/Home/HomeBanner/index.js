// import React from 'react';
import React, { PureComponent } from 'react';
import { Carousel } from 'antd';
import './index.scss';
import banner01 from './../../../../assets/banner/01.jpg';
import banner02 from './../../../../assets/banner/02.jpg';
import banner03 from './../../../../assets/banner/03.jpg';
import banner04 from './../../../../assets/banner/04.jpg';

class HomeBanner extends PureComponent{
    render(){
        return(
            <div>
                <Carousel autoplay>
                    <div><img src={banner01} alt=""/><h3>1</h3></div>
                    <div><img src={banner02} alt=""/><h3>2</h3></div>
                    <div><img src={banner03} alt=""/><h3>3</h3></div>
                    <div><img src={banner04} alt=""/><h3>4</h3></div>
                </Carousel>
            </div>
        )
     }
}
export default HomeBanner