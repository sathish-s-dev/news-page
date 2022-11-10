import React from 'react';
import styled from 'styled-components';
import Section from './Section';


function NewsSection() {
  return (
    <Container>
      <Wrap>
      <h2>New</h2>
      <Section title="Hydrogen VS Electric Cars" description="Will hydrogen-fueled cars ever catch up to EVs?"/>
      <Section title="The Downsides of AI Artistry" description="What are the possible adverse effects of on-demand AI image generation?"/>
      <Section title="Is VC Funding Drying Up? " description="Private funding by VC firms is down 50% YOY. We take a look at what that means."/>
      </Wrap>
    </Container>
  )
}

export default NewsSection

const Container = styled.section`
padding: 25px;
max-width: 500px;
color: hsl(36, 100%, 99%);
h2{
  margin-bottom: 15px;
  font-size: 2rem;
  color: gold;
  :hover{
    cursor: pointer;
  }
}
h3{
  margin-bottom: 10px;
  :hover{
    color: gold;
    cursor: pointer;
  }
}
`
const Wrap = styled.div`
background-color: hsl(240, 100%, 5%);
padding-left: 18px;
padding-right: 10px;
padding-top: 10px;
`
