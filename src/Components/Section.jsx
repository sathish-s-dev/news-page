import React from "react";
import styled from "styled-components";


function Section({title, description}) {
  return (
    <Container>
        <h3>{title}</h3>
        <p>{description}</p>
      </Container>
  )
}

export default Section

const Container = styled.section`
// padding: 25px;
margin-bottom: 20px;
border-bottom: 1px solid hsl(236, 13%, 42%);
p{
  padding-bottom: 20px;
  color:hsl(233, 8%, 79%)
}
`
