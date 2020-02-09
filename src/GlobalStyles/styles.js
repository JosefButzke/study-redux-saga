import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
    }

    #root {
        height: 100%;
    }

    body {
        height: 100%;
    }
`;