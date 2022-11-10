import React from 'react';
import styled from 'styled-components';
import HeaderSection from './HeaderSection';
import NewsSection from './NewsSection';
import ContentSection from './ContentSection';



function Home() {
  return (
    <Container>
      <Wrap>
      <HeaderSection />
      <NewsSection />
      </Wrap>
      <ContentSection />
    </Container>
  )
}
const Container = styled.main`
max-width: 1024px;
`
const Wrap = styled.div`

display:flex;
flex-wrap:wrap;

`

export default Home
