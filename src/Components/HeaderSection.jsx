import React from 'react';
import styled from "styled-components"

function HeaderSection() {
  return (
    <HeadContainer>
      <ImageWrap>
        <Img src='../images/image-web-3-desktop.jpg' alt="web-3.0"/>
      </ImageWrap>
      <Content>
         <h1>The Bright Future of Web 3.0 ?</h1>
         <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

         <ReadMoreBtn>ReadMore</ReadMoreBtn>
      </Content>
     
    </HeadContainer>
  )
}
const HeadContainer = styled.div`
padding: 25px;
padding-bottom: 0;
max-width: 500px;

`
const ImageWrap = styled.div`
width: 100%;
img{
  width: 100%;
}
`
const Img = styled.img`
`
const Content = styled.div`
width: 90%;
padding: 10px;
h1{
  margin-bottom: 20px;
  font-size: 2.5rem;
}
p{
  margin-bottom: 20px;
}
`
const ReadMoreBtn = styled.button`
background-color: hsl(5, 85%, 63%);
border: none;
letter-spacing: 1.5px;
color: hsl(36, 100%, 99%);
padding: 10px 20px;
:hover{
  opacity: 0.9;
  cursor: pointer;
  transform: scale(0.98);
}
`


export default HeaderSection