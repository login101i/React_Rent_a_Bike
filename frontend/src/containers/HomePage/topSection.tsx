import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import BikeMain from "../../assets/images/bikeMain.png";
import BlobImg from "../../assets/images/blob.svg";
import { screens } from "../../components/responsive";
import { Button } from "../../components/button";

const TopSectionContainer = styled.div`
  min-height: 300px;
  margin-top: 5em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
  `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
   
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
     relative
   
 
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
    text-center
  
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -5em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${screens.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${screens.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${screens.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 14em;
  right: -3em;
  top: -1em;
  position: absolute;

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

  @media (min-width: ${screens.sm}) {
    height: 20em;
    right: -1em;
    top: -3em;
  }

  @media (min-width: ${screens.lg}) {
    height: 24em;
    right: -2em;
    top: -3em;
  }

  @media (min-width: ${screens.xl}) {
    height: 33em;
    right: -7em;
    top: -9em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
flex-row

mt-2
`}
`;

export function TopSection() {
  return (
    <>
      <TopSectionContainer>
        <LeftContainer>
          <Slogan> Rent Your Bike With Us</Slogan>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in a distinctio perferendis eius aperiam reprehenderit, laudantium iste saepe eum iure, natus odit velit exercitationem, repellendus libero inventore quas maxime nesciunt? Ut, sunt doloremque?</Description>
          <ButtonsContainer>
            <Button text={"Rent a bike with us"} theme={"filled"} />
            <Button text={"Pick up date"} />
          </ButtonsContainer>
        </LeftContainer>
        <RightContainer>
          <BlobContainer>
            <img src={BlobImg} alt="" />
          </BlobContainer>
          <StandaloneCar>
            <img src={BikeMain} alt="" />
          </StandaloneCar>
        </RightContainer>
      </TopSectionContainer>
    </>
  );
}
