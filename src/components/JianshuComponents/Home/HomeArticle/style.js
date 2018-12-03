/**
 * HomeList
 */
import styled from 'styled-components';

export const WrapperHomeArticle = styled.div`
    position: relative;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
`;

export const ListItem = styled.div`
    position: relative;
    width: 100%;
    border-bottom: 1px solid #f0f0f0;
    padding: 20px 10px;
    display: flex;
    flex-direction: row-reverse;
    img {
        display: inline-block;
        width: 150px;
        height: 100px;
        margin-left: 20px;
        border-radius: 10px;
    }
    .listInfo {
        position: relative;
        display: inline-block;
        text-align: left;
        h3 {
            font-size: 1.3rem;
        }
        span {
            padding: 0 7px 0 0;
        }
    }
`;

export const ListInfo = styled.div`

`;

export const LoadMore = styled.div`
    position: relative;
    width: 100%;
    padding: 6px 0;
    background-color: yellow;
    background-color: #eee;
    border-radius: 50px;
    cursor: pointer;
`;