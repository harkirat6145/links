import React from "react";
import { CardBird } from "./CardBird";
import { ImgSec } from "./ImgSec";
import { SideBar } from "./SideBar";
import { TopImgSec } from "./TopImgSec";
import {
  Cover,
  Wapper,
  SubWapper,
  MainWapper,
  MainRightWapper,
  MainLeftWapper,
} from "../style/style";

const SubComponent = () => {
  return (
    <Cover>
      <Wapper>
        <SubWapper>
          <TopImgSec />
          <Wapper>
            <MainWapper>
              <MainLeftWapper>
                <ImgSec />
              </MainLeftWapper>
              <MainRightWapper>
                <SideBar />
                <CardBird />
              </MainRightWapper>
            </MainWapper>
          </Wapper>
        </SubWapper>
      </Wapper>
    </Cover>
  );
};

export default SubComponent;
