import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/picture1.jpg';
import img2 from '../assets/picture2.jpg';
import img3 from '../assets/picture3.jpg';
import img4 from '../assets/picture4.jpg';
import img5 from '../assets/picture5.jpg';
import img6 from '../assets/picture6.jpg';
import img7 from '../assets/picture7.jpg';
import img8 from '../assets/picture8.jpg';
import img9 from '../assets/picture9.jpg';
import img10 from '../assets/picture10.jpg';

export const PicturesContainer = styled.div`
  height: 100%;
`

export const PicturesList = styled.ul`
  list-style: none;
  padding-left: 0;
`

export const Picture = styled.li`
  display: block;
  float: left;
  width: 19.5%;
  height: 200px;
  margin-top: 20px;
  margin-right: 5px;
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
`

const Pictures = (props) => {
  
  return (
    <PicturesContainer>
      <h4>Pictures</h4>
      <hr></hr>
      <PicturesList>
        <Picture><Image src={img1} alt=""/></Picture>
        <Picture><Image src={img2} alt=""/></Picture>
        <Picture><Image src={img3} alt=""/></Picture>
        <Picture><Image src={img4} alt=""/></Picture>
        <Picture><Image src={img5} alt=""/></Picture>
        <Picture><Image src={img6} alt=""/></Picture>
        <Picture><Image src={img7} alt=""/></Picture>
        <Picture><Image src={img8} alt=""/></Picture>
        <Picture><Image src={img9} alt=""/></Picture>
        <Picture><Image src={img10} alt=""/></Picture>
      </PicturesList>
    </PicturesContainer>
  )
}
export default Pictures;