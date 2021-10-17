import React, { useState } from "react";

import styled from "styled-components";
import tw from "twin.macro";

import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { screens } from "../../components/responsive";

import { Bike } from "../../components/bike";
import { IBike } from "../../typings/bike";

const testBike: IBike = {
  name: "NINETY ONE Defeatr Pro 29T 21 Speed",
  mileage: "10k",
  thumbnailSrc: "https://m.media-amazon.com/images/I/51si+HtjEzL._SY300_SX300_.jpg",
  dailyPrice: 70,
  monthlyPrice: 1600,
  gearType: "Auto",
  gas: "Petrol",
};

const testBike2: IBike = {
  name: "osmic Trium Fat Bike 27.5 inches Wheel Size",
  mileage: "20k",
  thumbnailSrc: "https://m.media-amazon.com/images/I/71rX2eTwamL._SX679_.jpg",
  dailyPrice: 50,
  monthlyPrice: 1500,
  gearType: "Auto",
  gas: "Petrol",
};
const testBike3: IBike = {
  name: "NINETY ONE Defeatr Pro 29T 21 Speed",
  mileage: "20k",
  thumbnailSrc: "https://m.media-amazon.com/images/I/71rX2eTwamL._SX679_.jpg",
  dailyPrice: 50,
  monthlyPrice: 1500,
  gearType: "Auto",
  gas: "Petrol",
};

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

export function TopBikes() {
  const [current, setCurrent] = useState(0);

  const cars = [<Bike {...testBike} />, <Bike {...testBike2} />, <Bike {...testBike} />, <Bike {...testBike2} />, <Bike {...testBike2} />, <Bike {...testBike} />, <Bike {...testBike} />, <Bike {...testBike2} />, <Bike {...testBike2} />];

  const isMobile = useMediaQuery({ maxWidth: screens.sm });

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>

      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
