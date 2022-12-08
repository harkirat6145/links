import Styled from "styled-components";

export const ButtonView = Styled.button`
  color: white;
  background-color: white;
  color : black ;
  font-size: 13px;
   font-weight: 800 ;
    padding: 6px 4px;
  width: 80px ;
  border: none ;
`;
export const SubButtonView = Styled.button`
  color: white;
  background-color: gray;
  font-size: 12px;
  padding: 6px 12px;
  border: none ;
`;
export const SectionSize = Styled.div`
height: 250px;
background: url(img/eizazh-dikai.jpg);
background-repeat: no-repeat;
display: flex;
padding: 20px;
justify-content: end;  
`;
export const Heading = Styled.h3`
margin: 10px 0;
`;
export const SubHeading = Styled.p`
color: gray ;
margin-top: 10px ;
`;
export const CoustomSection = Styled.p`
padding-bottom: 10px ;
border-bottom : 1px solid #ada8a8 ;

`;
export const CoustomColor = Styled.p`
color :${(props) => (props.bgRed ? "red" : "green")};
margin-bottom:0;
`;

export const SubWhiteHeading = Styled.p`
color: white ;
`;
export const Wapper = Styled.div`

`;
export const Responsive = Styled.div`
@media only screen and (max-width: 992px) {
width:100%;
padding:20px;
}
`;
export const SubWapper = Styled.div`
background-color: gray ;
padding: 20px 40px;
@media only screen and (max-width: 992px) {
padding: 20px 20px;
}
`;
export const MainWapper = Styled.div`
background-color: white ;
padding: 10px;
display:flex ;
margin-top :40px;
width: 100% ;
@media only screen and (max-width: 992px) {
width: 100% ;
display: block ;
}
`;
export const Division = Styled.div`
display:flex ;
flex-wrap:wrap;
margin-top: 10px;
width:100% ;
img{
  width:25% ;
  padding-right:10px
}
img:nth-last-child(1) {
  padding-right:0px
}
}
`;
export const MainRightWapper = Styled.div`
width: 25%;
padding: 10px 20px 20px 20px;
@media only screen and (max-width: 992px) {
width: 100% ;
display: flex ;
}
@media only screen and (max-width: 690px) {
width: 100% ;
display: block ;
padding: 0px;
}
`;
export const MainLeftWapper = Styled.div`
width: 75%;
@media only screen and (max-width: 992px) {
width: 100% ;
}
`;
export const MainImgWapper = Styled.div`
border-right: 1px solid rgb(175, 175, 175);
padding: 10px 20px 20px 20px;
@media only screen and (max-width: 992px) {
border: none ;
}
`;
export const OuterCover = Styled.div`
border: 1px solid rgb(175, 175, 175);
img{
   width: 100% ;
   height: 100% ;
   padding: 8px;
}
@media only screen and (max-width: 992px) {
height: 188px;
}
@media only screen and (max-width: 700px) {
height: 250px ;
}
`;
export const WrapperSize = Styled.div`
height:300px ;
img{
  width:100% ;
  height : 100% ;
}
`;

export const Box = Styled.div`
background-color: rgb(23, 151, 81);
width: 30%;
padding: 20px ;
font-size: 10px;
color: white ;
@media only screen and (max-width: 992px) {
width: 40% ;
}
@media only screen and (max-width: 700px) {
width: 50% ;
}
@media only screen and (max-width: 555px) {
width: 70% ;
}
@media only screen and (max-width: 400px) {
width: 100% ;
}
`;

export const Cover = Styled.div`
    font-size: 14px;
font-family: 'Lato', sans-serif;`;

export const TopImgWapper = Styled.div`
display:flex ;
color: white ;
justify-content: space-between ;
margin-bottom: 20px ; 
align-items: baseline;
margin-bottom: 0;
`;
