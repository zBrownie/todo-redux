import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  

*{
    padding:0;
    margin:0;
    outline:0;
    box-sizing:border-box;
}

html,body,#root{
    height: 100%;
}

body,input,button{
    font-family:"Roboto",Arial, Helvetica, sans-serif;
}
`;

export default Global