import React from "react";
import { AiFillAlipayCircle } from "react-icons/ai";
import {
  ButtonView,
  Box,
  SectionSize,
  SubHeading,
  Heading,
  Wapper,
  Cover,
  TopImgWapper,
  SubWhiteHeading,
} from "../style/style.js";

export const TopImgSec = () => {
  return (
    <>
      <Wapper>
        <TopImgWapper>
          <Heading>
            <AiFillAlipayCircle /> PhotoGrapher
          </Heading>
          <SubWhiteHeading>17/January/2012</SubWhiteHeading>
        </TopImgWapper>
      </Wapper>
      <SectionSize>
        <Box>
          <Heading>Great Photos Every Day</Heading>
          <Cover>
            <SubHeading>
              <SubWhiteHeading>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </SubWhiteHeading>
            </SubHeading>
          </Cover>
          <ButtonView>submit</ButtonView>
        </Box>
      </SectionSize>
    </>
  );
};
