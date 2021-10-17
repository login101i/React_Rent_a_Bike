import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

import { Navbar } from "../../components/navbar";
import { TopSection } from "../HomePage/topSection";
import { BookCard } from "../../components/bookCard";
import { BookingSteps } from "./bookingSteps";

import { Marginer } from "../../components/marginer";
import { AboutUs } from "./aboutUs";
import { TopBikes } from "./topBikes";
import { FooterContainer } from "./footerContainer";

const PageContainer = styled.div`
  ${tw`
flex
flex-col
w-full
h-full
items-center

justify-between
overflow-x-hidden

`}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="2em" />

      <BookCard />
      <Marginer direction="vertical" margin="5em" />
      <BookingSteps />

      <Marginer direction="vertical" margin="5em" />
      <AboutUs />
      <Marginer direction="vertical" margin="5em" />
      <TopBikes />
      <Marginer direction="vertical" margin="5em" />
      <FooterContainer />
    </PageContainer>
  );
}
