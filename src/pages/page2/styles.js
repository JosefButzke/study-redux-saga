import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: black;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        
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
    }
`;