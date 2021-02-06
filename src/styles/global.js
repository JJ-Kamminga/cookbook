import css from 'styled-jsx/css';

export default css.global`
    :root {
        --blue: #9cf6f6ff;
        --gold: #f3c98bff;
        --yellow: #F9C846;
        --brown: #daa588ff;
        --copper: #c46d5eff;
        --gold: #FFB902;
        --velvet: #004835;
        --red: #f56960ff;
        --darkred: #CD5C5C;
        
        --black: black;
        --white: white;
        
        --lightgray: #ddd5dc;
        --gray: #969393;
        --darkgray: #494949;
    }
    html {
      scroll-behavior: smooth;
    }
    body {
        background-color: var(--red);
        min-height: 100vh;
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        word-wrap: break-word;
        overflow-x: hidden;
    }

    * {
        box-sizing: border-box;
    } 

    main {
        margin-left: auto;
        margin-right: auto;
        padding: 0px 0px 100px 0px;
        width: calc(30vw + 200px);
        margin-top: 25px;
        margin-bottom: 75px;
        padding: 25px;
        border: 2px solid var(--black);
        border-radius: 4px;
        background-color: #ffe0b5;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;