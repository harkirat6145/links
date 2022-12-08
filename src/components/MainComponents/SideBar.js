import React from "react";
import {
  Heading,
  Wapper,
  CoustomSection,
  Responsive,
  CoustomColor,
} from "../style/style.js";

export const SideBar = () => {
  return (
    <Wapper>
      <Responsive>
        <Heading>Side Bar List</Heading>
        <CoustomSection>
          Lorem ipsum dolor sit amet consectetur molestiae.
        </CoustomSection>
        <Wapper>
          <CoustomSection>
            <CoustomColor>Lorem ipsum dolor sit amet.</CoustomColor>
          </CoustomSection>
          <CoustomSection>
            <CoustomColor>Lorem ipsum dolor sit amet.</CoustomColor>
          </CoustomSection>
          <CoustomSection>
            <CoustomColor>Lorem ipsum dolor sit amet.</CoustomColor>
          </CoustomSection>
          <CoustomSection>
            <CoustomColor bgRed>Lorem ipsum dolor sit amet.</CoustomColor>
          </CoustomSection>
        </Wapper>
      </Responsive>
    </Wapper>
  );
};
