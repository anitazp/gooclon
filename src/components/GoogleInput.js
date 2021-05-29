import styled from "styled-components"


export const GoogleInput = styled.div `
    display:flex;
    aling-items:center;
    border:  1px solid lightgray;
    height: 20px;
    padding: 10px 20px;
    border-radius: 999px;
    width: 65vw;
    max-width: 560px;
    margin: 0 auto;
    margin-top: 20px;

    &:hover{
        -webkit-box-shadow: 0px 2px 4px 3px rgba(232,232,232,.7);
        box-shadow: 2px 2px 4px 3px rgba(232,232,232,.7);
    }
    & > .search__inputIcon {
        color: gray;
    }
    
    & > input{
        flex: 1;
        border: none;
        padding: 10px 20px;
        font-size: medium;

    }
    & > input:focus{
        outline-width: 0;
    }

    & > .mic__inputIcon {
        color: gray;
    }



`