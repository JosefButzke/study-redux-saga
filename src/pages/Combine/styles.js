import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    background: black;

    aside { 
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 40px;
        height: 100vh;
        background: white;
        
        ul {

            li{
                display: inline-block;
                
                button {
                    margin-left: 10px;
                }
            }
        }
    }

    > div {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 32px;
        color: white;
    }

    button {
        height: 44px;
        width: 100px;
        background: #7159C1;
        color: white;
        border: none;
        border-radius: 4px;
        margin-top: 10px;

        :hover {
            cursor: pointer;
        }
    }
`;