/**
 * Top
 */
import styled from 'styled-components';
import logoPic from './../../../assets/logo.png';
const primary = '#ea6f5a';

export const Wrapper__Top = styled.div`
    position: relative;
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
// Logo
export const Top__Logo = styled.div`
    float: left;
    display: inline-block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Container = styled.div`
    position: relative;
    /* max-width: 960px;    */
    margin: 0 auto;
    width: calc(100% - 320px);
    height: inherit;    
    border: 1px solid #222;    
    @media screen and (max-width:880px) {
        width: calc(100% - 205px);
    }
    .slide-enter {
        transition: all .2s ease-out;
    }
    .slide-enter-active {
        width: 240px;
    }
    .slide-exit {
        transition: all .2s ease-out;
    }
    .slide-exit-active {
        width: 200px;
    }
`;

export const Top__Nav = styled.div`
    position: relative;
    display: inline-block;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
`;

export const NavItem = styled.div`
    display: inline-block;
    padding: 0 20px;
    line-height: 56px;
    cursor: pointer;
    &:hover {
        color: #8e8e8e;
    }
    &.active {
        color: ${primary};  
    }
    /* & i {
        display: none;
    } */
    @media screen and (max-width:1100px) {
        & .iconfont--hide {
            display: none;
        }
    }
    @media screen and (max-width:880px) {
        font-size: 0px;
        /* & i {
            display: block
        } */
        & .iconfont--hide {
            display: inline-block;
        }
    }
`;

// Search 搜尋
export const Top__Search = styled.span`
    position: relative;
    display: inline-block;
    width: 200px;
    height: 56px;
    &.focused {
        width: 260px;
        input {
            background-color: #ccc
        }

        .btn-search {
            background-color: #666;
        }   
    }
    /* &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 200px;
    } */
`;

export const SearchInput = styled.input.attrs({
	placeholder: '搜索'
})`    
    display: inline-block;    
    margin-top: 9px;
    padding: 0 40px 0 20px;
    width: inherit;
    height: 38px;
    background-color: #eee;
    border: 1px solid #eee;
    border-radius: 40px;
    font-size: 14px;
    outline: none;
    &::placeholder {
        color: ${primary}; 
    }
`;

export const Top__User = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    /* width: 200px; */
    background-color: yellow;
`;

export const Button = styled.div`
    display: inline-block;
    padding: 0px 20px;
    line-height: 40px;
    margin: 8px 6px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    &.btn-primary {
        background-color: ${primary};
        color: #fff;
        &:hover {
            background-color: #fff;
            color: ${primary};
        }
    }
    &.btn-sub {
        color: ${primary};
        &:hover {
            background-color: ${primary};
            color: #fff;
        }
    }
    &.btn-search {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        margin: 0;
        padding: 0;
        width: 30px;
        height: 30px;
        border-radius: 100%;        
        /* background-color: #666; */
        border: none;        
        text-align: center;
        line-height: 30px;
        & i {
            color: #fff;
            text-align: center;
        }
    }
`;
