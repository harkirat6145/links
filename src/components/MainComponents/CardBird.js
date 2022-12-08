import React from "react";
import {
  SubButtonView,
  Heading,
  SubHeading,
  Wapper,
  OuterCover,
  Responsive,
} from "../style/style.js";

export const CardBird = () => {
  return (
    <Wapper>
      <Responsive>
        <Heading>New Addition</Heading>
        <Wapper>
          <OuterCover>
            <img
              src="img/Eopsaltria_australis_-_Mogo_Campground (1).jpg"
              alt="bird"
            />
          </OuterCover>
        </Wapper>
        <SubHeading>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur
          adipisicin
        </SubHeading>
        <SubButtonView>VIEW ALL PHOTOS</SubButtonView>
      </Responsive>
    </Wapper>
  );
};
