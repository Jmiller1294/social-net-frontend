import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/profile.jpg';

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
        <Picture><Image src={img1} alt=""/></Picture>
        <Picture><Image src={img1} alt=""/></Picture>
        <Picture><Image src={img1} alt=""/></Picture>
        <Picture><Image src={img1} alt=""/></Picture>
        <Picture><Image src={img1} alt=""/></Picture>
        <Picture><Image src={img1} alt=""/></Picture>
        <Picture><Image src={img1} alt=""/></Picture>
        <Picture><Image src={img1} alt=""/></Picture>
        <Picture><Image src={img1} alt=""/></Picture>
      </PicturesList>
    </PicturesContainer>
  )
}
export default Pictures;