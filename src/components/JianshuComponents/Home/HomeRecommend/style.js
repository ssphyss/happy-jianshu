import styled from 'styled-components';

export const WrapperHomeRecommend = styled.div`
    position: relative;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
`;

export const HomeRecommendItem = styled.div`
    position: relative;
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain; 
`;