import styled from 'styled-components';

export const WrapperDetailArticle = styled.div`
    position: relative;
    .container {
        position: relative;
        width: 90%;
        width: 1070px;        
        width: calc(100% - 320px);
        margin: 0 auto;
        text-align: left;
        overflow: hidden;
    }
`;

export const DetailLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    width: calc(100% - 250px);
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const DetailRight = styled.div`
    float: right;
    width: 240px;
    width: 23%;
    padding-top: 30px;
    img {
        width: 180px;
    }
`;

export const DetailHeader = styled.div`
    margin: 20px 0 20px 0;
    font-size: 34px;
    font-weight: bold;
    line-height: 44px;
    color: #333;  
`;

export const DetailContent = styled.div`
    margin: 50px 0 220px 0;
    font-size: 16px;
    line-height: 30px;
    color: #2f2f2f;        
`;