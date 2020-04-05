import styled from "styled-components"

const Description = styled.div`
    font-size: 1rem;
    color: #333;
    ${props => props.bold && "font-weight: 600"}
`

export default Description;