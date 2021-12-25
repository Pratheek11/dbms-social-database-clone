import React from 'react';
import styled from 'styled-components';

const Topics = () => {

    let tags = [{
        "tagName": "react" 
    },{
        "tagName": "software development"
    },{
        "tagName": "solidity"
    },{
        "tagName": "mongoDb"
    },{
        "tagName": "software development"
    },{
        "tagName": "solidity"
    },{
        "tagName": "mongoDb"
    },{
        "tagName": "software development"
    },{
        "tagName": "solidity"
    },{
        "tagName": "mongoDb"
    },{
        "tagName": "software development"
    },{
        "tagName": "solidity"
    },{
        "tagName": "mongoDb"
    },{
        "tagName": "mongoDb"
    },{
        "tagName": "software development"
    },{
        "tagName": "solidity"
    },{
        "tagName": "mongoDb"
    }];

    return (
        <Container>
            <Cover>
                {
                    tags.map((el) => {
                        return(
                            <P>{"#" + el.tagName}</P>
                        )
                    })
                }
            </Cover>
        </Container>
    )
}
const Container = styled.div`
    width: 20%;
    height: 70vh;
    border-right: 2px solid rgba(99, 99, 99, 1);
    color: #C0C0C0;
    
`;
const Cover = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        display: none;
        // width: 5px;
        // background-color: grey;
        // border-radius: 5px;
      }    
`;
const P = styled.div`
    cursor: pointer;
    height: auto;
    margin: 10px;
    padding: 5px;
    font-size: 14px;
    display: flex;
    justify-content: flex-start;
    border-bottom: 2px solid rgba(99, 99, 99, 1);
    transition: all 0.8s ease;

    &:hover {
        transform: scale(1.1);
        color: #008abf; 
        border-bottom: 2px solid #008abf;
    }
`;
export default Topics
