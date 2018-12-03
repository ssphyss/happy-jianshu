import styled from 'styled-components';
export const WrapperHomeWriter = styled.div`
    position: relative;
    width: 100%;
`;


export const HomeWriterItem = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    margin-bottom: 20px;
`;

export const ImgBox = styled.div`
    display: inline-block;
    width: 50px;
    width: 50px;
    background: url(${(props) => props.imgUrl});
    margin-right: 20px;
    img {
        width: 100%;
        border-radius: 100%;
    }
`;

export const InfoBox = styled.div`
    position: relative;
    width: calc(100% - 150px);
    width: 100%;
    text-align: left;
    a {
        position: absolute;
        right: 0;
        top: 0;
        color: #42c02e;
    }
`;
