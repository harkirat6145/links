import React from "react";
import {
  SubButtonView,
  Heading,
  SubHeading,
  Wapper,
  WrapperSize,
  MainImgWapper,
  Division,
} from "../style/style.js";

export const ImgSec = () => {
  return (
    <Wapper>
      <MainImgWapper>
        <Heading>Beautiful Day In Paradise - In The Morning</Heading>
        <WrapperSize>
          <img src="img/pexels-pixabay-56866.jpg" alt="nature" />
        </WrapperSize>
        <Wapper>
          <Division>
            <img src="img/pexels-pixabay-56866.jpg" alt="flower" />

            <img src="img/pexels-pixabay-56866.jpg" alt="flower" />

            <img src="img/pexels-pixabay-56866.jpg" alt="flower" />

            <img src="img/pexels-pixabay-56866.jpg" alt="flower" />
          </Division>
        </Wapper>
        <SubHeading>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          exercitationem nihil voluptates reprehenderit laudantium libero quos
          corrupti iure unde accusantium voluptates reprehenderit laudantium
          libero quos corrupti iure unde accusantium.
        </SubHeading>
        <SubButtonView>READ MORE</SubButtonView>
      </MainImgWapper>
    </Wapper>
  );
};
