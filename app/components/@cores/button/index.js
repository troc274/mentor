import styled from "styled-components"

const Button = styled.button`
    font-family: "Latovi", sans-serif;
    background-image: linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38);
    background-size: 200% auto;
    border-radius: 3rem;
    border: none;
    outline: 0;
    cursor: pointer;
    color: #fff;
    font-size: 1rem;
    display: inline-block;
    transition: all .3s;
    text-align: center;
    padding: 0 1.875rem;
    height: 3.5rem;
    line-height: 3.5rem;
    box-shadow: 0 4px 12px 0 rgba(246,116,57,.4);
    ${props => props.full && "width: 100%;"}
    &:hover{
        background-position: 100%;
    }
`

export default Button;