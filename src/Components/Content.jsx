import React from 'react'
import styled from 'styled-components'

function Content({image, no, description, title}) {
  return (
    <Container>
      <ImgWrap>
        <img src={image} alt="web3.0" />
      </ImgWrap>
      <ContentWrap>
        <h2>{no}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </ContentWrap>
    </Container>
  )
}

export default Content

const Container = styled.div`
padding: 0 0 0 25px;
max-height: 150px;
display:flex;
@media (min-width: 400px){
  max-width: 80%;
  max-height: 150px;
}
@media (min-width: 500px){
  max-width: 300px;
  max-height: 150px;
}


`
const ImgWrap = styled.div`
width:30%;
img{
  width:100%;
}
`
const ContentWrap = styled.div`
width: 70%;
padding-left: 10px;
h2{
  font-size: 2rem;
  padding-bottom: 10px;
  color: hsl(236, 13%, 42%)
}
h3{
  padding-bottom: 10px;
  :hover{
    color: hsl(35, 77%, 62%);
    cursor: pointer;
  }
}
`