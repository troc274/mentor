import styled from "styled-components"

const Title = styled.div`
    font-size: 1.5rem;
    color: #333;
    line-height: 2.25rem;
    ${props => props.bold && "font-weight: 600"}
`

export default Title;
