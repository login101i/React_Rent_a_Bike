import React, { useState } from "react";
import styled, {css} from "styled-components";
import tw from "twin.macro";
import { faCalendarAlt, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Marginer } from "../marginer";
import { Button } from "../button";

const BookContainer = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
flex
justify-center
items-center
rounded-md
bg-white
pt-1
pb-1
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-5
md:pr-5

`}
`;

const ItemContainer = styled.div`
  ${tw`flex relative`};
`;

const Icon = styled.span`
  ${tw`
    text-red-500
      fill-current
      text-xs
      md:text-base
      mr-1
      md:mr-3
  `};
`;

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
    cursor-pointer
    select-none
  `};
`;

const LineSeperator = styled.span`
  width: 2px;
  height: 50%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-5
    md:ml-5
  `};
`;

const DateCalendar = styled(Calendar)`
  position: absolute;
  max-width: none;
  user-select: none;
  top: 2em;
  left: 0;

  ${({ offset }: any) =>
    offset &&
    css`
      left: -6em;
    `};


` as any;

const SmallIcon = styled.span`
  ${tw`
    text-gray-500
    fill-current
    text-xs
    md:text-base
    ml-1
  `};
`;

export function BookCard() {
  const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
  const [returnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const openFirstCalendar = () => {
    setStartCalendarOpen(!isStartCalendarOpen);
    if (returnCalendarOpen) {
      setReturnCalendarOpen(false);
    }
  };

  const openSecondCalendar = () => {
    setReturnCalendarOpen(!returnCalendarOpen);
    if (isStartCalendarOpen) {
      setStartCalendarOpen(false);
  };
}

  const [returnDate, setReturnDate] = useState<Date>(new Date());

  return (
    <BookContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={openFirstCalendar}>Pick Up Start Date</Name>

        <SmallIcon>
          <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>

        {isStartCalendarOpen && <DateCalendar value={returnDate} onChange={setReturnDate} />}
      </ItemContainer>
      <LineSeperator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name onClick={openSecondCalendar}>Pick Up Return Date</Name>

        {returnCalendarOpen && <DateCalendar offset value={returnDate} onChange={setReturnDate} />}

        <SmallIcon>
          <FontAwesomeIcon icon={returnCalendarOpen ? faCaretUp : faCaretDown} />
        </SmallIcon>
      </ItemContainer>

      <Marginer direction="horizontal" margin="2em" />
      <Button text="Book Your Ride" />
    </BookContainer>
  );
}
