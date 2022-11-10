import React from 'react'
import styled from 'styled-components'
import Content from './Content'

function ContentSection() {
  return (
    <Container>
      <Content image = "../images/image1.jpg" no = "01" title="Reviving Retro PCs" description="What happens when old PCs are given modern upgrades?"/>
      <Content image = "../images/image2.jpg" no = "02" title="Top 10 Laptops of 2022" description="Our best picks for various needs and budgets."/>
      <Content image = "../images/image3.jpg" no = "03" title="The Growth of Gaming" description="How the pandemic has sparked fresh opportunities."/>
    </Container>
  )
}

export default ContentSection

const Container = styled.div`
display: flex;
flex-wrap: wrap;
@media (min-width: 400px){
flex-direction: column;
}
@media (min-width: 700px){
  flex-direction: row;
  }


`